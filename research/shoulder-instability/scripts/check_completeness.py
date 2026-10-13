#!/usr/bin/env python3
"""Validate a filled shoulder-instability dataset against the data dictionary.

Usage:
    python3 scripts/check_completeness.py data/my_cohort.csv [--out data/my_cohort_checked.csv]

What it does:
  1. Computes derived fields when their inputs are present (GBL%, HSI, glenoid track,
     track status, DTD, ISIS items/total, recurrence_any, follow-up months, ...).
  2. Flags invalid values (not in allowed categories, out of numeric range, bad dates).
  3. Lists missing fields per patient, grouped by priority tier (A > B > C).
  4. Writes the dataset with derived fields filled in, plus a per-patient recall list.

Uses only the Python standard library.
"""
import argparse
import csv
import re
import sys
from datetime import date
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DICT_PATH = HERE / "data" / "data_dictionary.csv"
PERIPHERAL_DTD_MM = 8.0  # protocol choice; see 02_study_protocol_and_data_plan.md §6
NA_TOKENS = {"", "na_missing", "missing", "?", "-"}


def load_dictionary():
    with open(DICT_PATH, newline="", encoding="utf-8") as f:
        return {r["variable"]: r for r in csv.DictReader(f)}


def num(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None


def parse_date(v):
    try:
        return date.fromisoformat(v)
    except (TypeError, ValueError):
        return None


def months_between(d1, d2):
    return round((d2 - d1).days / 30.4375, 1)


def blank(row, key):
    return (row.get(key) or "").strip().lower() in NA_TOKENS


def setd(row, key, value):
    """Set a derived value only if the cell is empty (never overwrite entered data)."""
    if blank(row, key) and value is not None:
        row[key] = str(round(value, 1)) if isinstance(value, float) else str(value)


# Fields that are only required when a condition holds: var -> predicate(row)
def _is(var, *vals):
    return lambda r: (r.get(var) or "").upper() in vals


APPLICABLE_IF = {
    "redislocation_date": _is("redislocation", "Y"),
    "subluxation_date": _is("subluxation", "Y"),
    "months_to_recurrence": _is("recurrence_any", "Y"),
    "recurrence_mechanism": _is("recurrence_any", "Y"),
    "reoperation_reason": _is("reoperation_any", "Y"),
    "reoperation_date": _is("reoperation_any", "Y"),
    "revision_procedure": _is("revision_instability", "Y"),
    "complication_type": _is("complication_any", "Y"),
    "complication_grade": _is("complication_any", "Y"),
    "n_remplissage_anchors": _is("procedure_group", "BANKART_REMP"),
    "remplissage_technique": _is("procedure_group", "BANKART_REMP"),
    "n_glenoid_anchors": _is("procedure_group", "BANKART", "BANKART_REMP"),
    "latarjet_technique": _is("procedure_group", "LATARJET"),
    "latarjet_fixation": _is("procedure_group", "LATARJET"),
    "latarjet_capsule_repair": _is("procedure_group", "LATARJET"),
    "graft_position_axial": _is("procedure_group", "LATARJET"),
    "graft_overhang_mm": _is("procedure_group", "LATARJET"),
    "graft_height": _is("procedure_group", "LATARJET"),
    "graft_union": _is("procedure_group", "LATARJET"),
    "graft_osteolysis": _is("procedure_group", "LATARJET"),
    "hs_width_mm": lambda r: (r.get("hs_present") or "").upper() != "N",
    "hs_bone_bridge_mm": lambda r: (r.get("hs_present") or "").upper() != "N",
    "hs_depth_mm": lambda r: (r.get("hs_present") or "").upper() != "N",
    "bony_fragment_pct": _is("bony_bankart", "Y"),
    "rts_any": lambda r: (r.get("sport_level") or "").upper() != "NONE",
    "rts_same_level": _is("rts_any", "Y"),
    "rts_months": _is("rts_any", "Y"),
}


def applicable(row, var):
    pred = APPLICABLE_IF.get(var)
    return pred(row) if pred else True


def derive(row):
    D, d = num(row.get("glenoid_diameter_D_mm")), num(row.get("glenoid_defect_d_mm"))
    if D and d is not None:
        gbl = d / D * 100
        setd(row, "glenoid_bone_loss_pct", gbl)
        setd(row, "gbl_band", "LT13.5" if gbl < 13.5 else ("13.5-20" if gbl <= 20 else "GT20"))
        setd(row, "glenoid_track_mm", 0.83 * D - d)

    w, bb = num(row.get("hs_width_mm")), num(row.get("hs_bone_bridge_mm"))
    if w is not None and bb is not None:
        setd(row, "hsi_mm", w + bb)
    if row.get("hs_present", "").upper() == "N":
        setd(row, "hsi_mm", 0.0)

    gt, hsi = num(row.get("glenoid_track_mm")), num(row.get("hsi_mm"))
    if gt is not None and hsi is not None:
        dtd = gt - hsi
        setd(row, "dtd_mm", dtd)
        setd(row, "track_status", "OFF" if hsi > gt else "ON")
        setd(row, "track_subtype", "OFF" if hsi > gt else ("PERIPHERAL" if dtd < PERIPHERAL_DTD_MM else "CENTRAL"))

    # ISIS items
    age = num(row.get("age_at_surgery"))
    if age is not None:
        setd(row, "isis_age", 2 if age < 20 else 0)
    lvl = row.get("sport_level", "").upper()
    if lvl:
        setd(row, "isis_competitive", 2 if lvl in ("COMPETITIVE", "PROFESSIONAL") else 0)
    for src, dst, pts in [
        ("contact_or_overhead_sport", "isis_contact_overhead", 1),
        ("hyperlaxity_er_gt85", "isis_hyperlaxity", 1),
        ("xr_hill_sachs_ap_er", "isis_hill_sachs", 2),
        ("xr_glenoid_contour_loss", "isis_glenoid", 2),
    ]:
        v = row.get(src, "").upper()
        if v in ("Y", "N"):
            setd(row, dst, pts if v == "Y" else 0)
    items = [num(row.get(k)) for k in ("isis_age", "isis_competitive", "isis_contact_overhead",
                                       "isis_hyperlaxity", "isis_hill_sachs", "isis_glenoid")]
    if all(i is not None for i in items):
        setd(row, "isis_total", int(sum(items)))

    # Recurrence
    rd, sx = row.get("redislocation", "").upper(), row.get("subluxation", "").upper()
    if rd == "Y" or sx == "Y":
        setd(row, "recurrence_any", "Y")
    elif rd == "N" and sx == "N":
        setd(row, "recurrence_any", "N")

    sdate = parse_date(row.get("surgery_date"))
    rec_dates = [parse_date(row.get(k)) for k in ("redislocation_date", "subluxation_date")]
    rec_dates = [x for x in rec_dates if x]
    if sdate and rec_dates:
        setd(row, "months_to_recurrence", months_between(sdate, min(rec_dates)))
    fu = parse_date(row.get("last_followup_date"))
    if sdate and fu:
        setd(row, "followup_months", months_between(sdate, fu))


RANGE_RE = re.compile(r"(-?\d+(?:\.\d+)?)\s*-\s*(-?\d+(?:\.\d+)?)")


def validate(row, dd):
    errors = []
    for var, spec in dd.items():
        val = (row.get(var) or "").strip()
        if not val or val.lower() in NA_TOKENS:
            continue
        t, allowed = spec["type"], spec["allowed_values_or_units"]
        if t == "category":
            opts = set(allowed.split("|"))
            if val.upper() not in {o.upper() for o in opts}:
                errors.append(f"{var}='{val}' not in {allowed}")
        elif t in ("integer", "decimal"):
            x = num(val)
            if x is None:
                errors.append(f"{var}='{val}' is not a number")
                continue
            if t == "integer" and x != int(x):
                errors.append(f"{var}='{val}' should be an integer")
            m = RANGE_RE.search(allowed)
            if m and not (float(m.group(1)) <= x <= float(m.group(2))):
                errors.append(f"{var}={val} outside {m.group(1)}-{m.group(2)}")
        elif t == "date" and not parse_date(val):
            errors.append(f"{var}='{val}' not YYYY-MM-DD")

    # Cross-field logic
    grp = row.get("procedure_group", "").upper()
    if grp != "LATARJET" and row.get("latarjet_technique", "").upper() not in ("", "NA"):
        errors.append("latarjet_technique filled for non-Latarjet case")
    fu = num(row.get("followup_months"))
    if fu is not None and fu < 24 and row.get("recurrence_any", "").upper() != "Y":
        errors.append(f"follow-up {fu} mo < 24 and no recurrence (eligibility)")
    if row.get("prior_surgery_same_shoulder", "").upper() == "Y":
        errors.append("revision case: analyse in separate cohort")
    return errors


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("dataset")
    ap.add_argument("--out", help="output CSV with derived fields (default: <dataset>_checked.csv)")
    args = ap.parse_args()

    dd = load_dictionary()
    with open(args.dataset, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        cols = reader.fieldnames or []

    unknown = [c for c in cols if c not in dd]
    if unknown:
        print(f"WARNING: columns not in dictionary (ignored): {', '.join(unknown)}\n")

    tiers = {t: [v for v, s in dd.items() if s["tier"] == t] for t in "ABC"}
    recall = []
    var_missing = {v: 0 for v in dd}

    for row in rows:
        derive(row)
        sid = row.get("study_id") or "(no id)"
        miss = {t: [v for v in tiers[t] if blank(row, v) and applicable(row, v)] for t in "ABC"}
        for t in "ABC":
            for v in miss[t]:
                var_missing[v] += 1
        errs = validate(row, dd)
        recall.append({
            "study_id": sid,
            "procedure_group": row.get("procedure_group", ""),
            "n_missing_A": len(miss["A"]),
            "n_missing_B": len(miss["B"]),
            "n_missing_C": len(miss["C"]),
            "missing_A": "; ".join(miss["A"]),
            "missing_B": "; ".join(miss["B"]),
            "errors": " | ".join(errs),
        })

    out = Path(args.out) if args.out else Path(args.dataset).with_name(Path(args.dataset).stem + "_checked.csv")
    with open(out, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(dd.keys()), extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)
    recall_path = out.with_name(out.stem + "_recall_list.csv")
    with open(recall_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(recall[0].keys()) if recall else ["study_id"])
        w.writeheader()
        w.writerows(sorted(recall, key=lambda r: (-r["n_missing_A"], -r["n_missing_B"])))

    n = len(rows)
    print(f"Patients: {n}")
    groups = {}
    for r in rows:
        g = r.get("procedure_group", "") or "(blank)"
        groups[g] = groups.get(g, 0) + 1
    print("By group: " + ", ".join(f"{k}={v}" for k, v in sorted(groups.items())))
    complete_a = sum(1 for r in recall if r["n_missing_A"] == 0)
    print(f"Tier-A complete: {complete_a}/{n}")
    print(f"Patients with validation errors: {sum(1 for r in recall if r['errors'])}")
    if n:
        print("\nMost-missing tier A/B variables:")
        top = sorted(((c, v) for v, c in var_missing.items() if dd[v]["tier"] in "AB" and c), reverse=True)[:15]
        for c, v in top:
            print(f"  {v:<32} {c:>4}/{n}  ({c / n:.0%})  tier {dd[v]['tier']}")
    print(f"\nWrote {out}\nWrote {recall_path}")


if __name__ == "__main__":
    sys.exit(main())
