# Study Protocol & Data Plan (Phase 2)

**Working title:** *Mason-Allen (BRUMA) Bankart Repair with Routine Hill-Sachs Remplissage versus Knotless
Bankart Repair for Recurrent Anterior Shoulder Instability: A Comparative Cohort Study Stratified by 3D-CT
Glenoid Bone Loss and Glenoid-Track Status*

> **Re-scoped (7 Oct 2026).** The first version compared Bankart vs Bankart + remplissage vs Latarjet. The
> practice's own records changed the question. From Oct 2018 the surgeon moved from knotless Bankart repair
> to the **BRUMA** technique (Bankart Repair Using Mason-Allen; Park JY et al., AJSM 2019, PMID 30596511),
> with **remplissage for every Hill-Sachs lesion**. With 24 Latarjets in 12 years, the practice rarely uses a
> bone block. The paper now tests whether that strategy holds up, especially where a bone block would
> usually be chosen.
>
> Earlier decisions still stand: own patients, retrospective cohort with prospective follow-up recall,
> pre-op bone loss on **3D-CT**, international journal.

---

## 1. Rationale and novelty
Evidence summary and references: [`literature/`](literature/). Short version:

- **Remplissage.** Remplissage added to Bankart repair lowers redislocation in bone loss under 15%. The
  RCT shows 18% vs 4% at 2 years (MacDonald, JSES 2021, PMID 33373683) and 22% vs 8% at about 4 years
  (PMID 38874505). Meta-analyses give 4–9 times higher recurrence odds without remplissage, at a cost of
  about 1–6° of external rotation.
- **Against Latarjet.** Pooled data show similar recurrence and fewer complications for Bankart +
  remplissage, but most of the reviews are of critically low quality. In **off-track lesions with bone loss
  over 15%**, one series reports 28.6% recurrence after remplissage vs 6.1% after Latarjet (Yang 2018,
  PMID 29672132). The STABLE trial (bone loss 10–20%) has not reported.
- **BRUMA.** BRUMA is published as a single-surgeon series of **small bony** Bankart lesions (Jung et al.,
  OJSM 2026, PMID 42367312; n = 32, union 93.8%, recurrence 6.3%). Remplissage was used in 15 of those 32,
  so "BRUMA + remplissage" is not new as a technique. In the RCT, BRUMA showed no clinical advantage over a
  simple stitch (Park 2019).
- **What is not published:**
  1. BRUMA compared with **knotless** repair
  2. BRUMA used for **soft-tissue as well as bony** Bankart lesions
  3. results **stratified by 3D-CT bone loss and glenoid track**
  4. **avoidance of a bone block** as an endpoint
  5. an **Indian** cohort

  This study addresses all five.
- **Framing.** The comparison is of two whole *strategies*: BRUMA + remplissage-for-every-Hill-Sachs vs
  knotless Bankart with selective remplissage. It is not a test of stitch strength. Biomechanical evidence
  does not show Mason-Allen to be stronger than other configurations on anchors.

## 2. Research questions
**Primary**
- In patients with recurrent traumatic anterior instability, is **time to recurrent instability**
  (dislocation or subluxation) different after the BRUMA strategy than after knotless Bankart repair, at a
  minimum of 2 years?

**Co-primary**
- **WOSI** at 2 years or later (MCID about 13–18 points on the 0–100 scale; see literature/02).

**Secondary**
1. Revision for instability; positive apprehension at final follow-up; composite clinical failure.
2. Oxford Instability Score (0–48), Rowe, ASES, SANE, VAS pain.
3. **External rotation in abduction (ER2) deficit** vs the opposite shoulder, which is the known cost of
   remplissage.
4. Return to sport (any and same level) and time to return.
5. Complications and reoperations.
6. **Key subgroup:** recurrence and WOSI in **glenoid bone loss 13.5–25%** and in **off-track /
   peripheral-track** lesions, where a bone block would usually be chosen. This is where "no bone block
   needed" must hold.
7. Anchor number and configuration, as recorded (2 Bankart anchors + 1 remplissage + 1 SLAP is the usual
   pattern).

## 3. Design & setting
- Retrospective comparative cohort, single centre, consecutive operations **Aug 2014 – 7 Oct 2024**. The
  cut-off allows a minimum of 2 years of follow-up at data lock in Oct 2026.
- Missing follow-up is completed **prospectively** by clinic recall or structured phone, WhatsApp or video
  contact. PROMs are self-administered, and their date and mode are recorded.
- Reporting follows **STROBE**. **IEC approval** is needed before recall contact, and patients consent to
  it. A waiver can cover the chart-review part only. Register the study retrospectively on CTRI.
- Level of evidence: III.

## 4. Eligibility
**Inclusion**
- Age 14 or over at surgery.
- Traumatic anterior instability (recurrent, or first-time in a high-risk patient; flagged).
- Primary arthroscopic stabilisation with a **knotless Bankart** or **BRUMA** repair, with or without
  remplissage.
- Minimum 24-month follow-up, *or* recurrence before 24 months. Failures are kept.

**Exclusion** (all are already flagged in the dataset, not deleted)
- Concomitant rotator cuff repair (older dislocators with cuff tears are a different entity).
- Posterior or combined anterior-posterior (pan-labral) labral repair; paralabral cyst decompression.
- Revision stabilisation, which is analysed separately if numbers allow.
- Epilepsy-related instability.
- Primary bone block (Latarjet). These are reported descriptively as the bone-block reference group.

## 5. Exposure groups
| Code | Group | Definition |
|---|---|---|
| `KNOTLESS` | Knotless Bankart ± remplissage | Surgeon's technique list; otherwise operations before 20 Oct 2018 |
| `BRUMA` | BRUMA Bankart ± remplissage | Surgeon's technique list; otherwise operations after 26 Nov 2019 |

The 2018–19 overlap is taken only from the surgeon's list. The remplissage indication differs by era:
- **BRUMA era:** remplissage for **every** Hill-Sachs lesion (surgeon's rule).
- **Knotless era:** selective, e.g. a shallow Hill-Sachs was left alone.

This difference is stated in Methods and handled in the analysis (§9).

**Classification rules applied to the records:**
- **Implant rule:** 2 Bankart anchors, a 3rd for remplissage, a 4th for SLAP. A recorded "Bankart" whose
  implant record shows an extra anchor, with no SLAP or other repair to explain it, was a remplissage.
- **Surgeon confirmation:** every 2023 BRUMA Bankart had a remplissage.

**Current counts** (393 shoulder instability patients in the practice records; main study = operated by
7 Oct 2024, isolated anterior instability):

| | Bankart only | Bankart + remplissage | Total |
|---|---|---|---|
| Knotless | 54 | 13 | **67** |
| BRUMA | 16 | 72 | **88** |
| Latarjet (bone-block reference) | | | 11 |

## 6. Outcomes
| Type | Variable | Definition |
|---|---|---|
| **Primary** | `recurrence_any`, `months_to_recurrence` | Dislocation **or** subluxation, patient-reported or documented |
| **Co-primary** | `wosi_final` | WOSI at 2 years or later |
| Secondary | `redislocation`, `revision_instability`, `apprehension_pos_final` | As in the data dictionary |
| Secondary | `ois_final` | Oxford Instability Score, 0–48 (higher = better) |
| Secondary | Rowe, ASES, SANE, VAS | Final |
| Secondary | ER2 and ER2 deficit vs the opposite side | Goniometer |
| Secondary | Return to sport, complications, reoperations | |

**Composite clinical failure** = recurrence, or revision for instability, or apprehension that limits
activity.

## 7. Imaging protocol (3D-CT)
Two independent observers, blinded to group and outcome where possible:
1. **Glenoid:** en-face 3D-CT with the humeral head subtracted; best-fit circle diameter D and anterior
   defect d. `GBL% = d/D × 100`.
2. **Hill-Sachs:** width and bone bridge; `HSI = width + bridge`; depth.
3. **Glenoid track:** `GT = 0.83 × D − d`. Off-track if HSI > GT. `DTD = GT − HSI`. **Peripheral track =
   on-track with DTD < 8 mm** (Li 2021).
4. **Reliability:** both observers measure 30 random cases, and observer 1 repeats them after 2 weeks or
   more. Report ICC(2,1).
5. **Bony Bankart:** fragment size as % of D. BRUMA reduces small fragments indirectly (Jung 2026), so
   report union where there is post-op imaging.

## 8. Data collection workflow
The dataset is built automatically from the practice's records. Patient-level data stays in a private
folder outside this repository.

```
Step 1  Cohort      practice records (OT register, op notes, implants, every imported spreadsheet) → every shoulder instability patient
Step 2  Exposure    surgeon's technique list + date rule + implant rule → KNOTLESS / BRUMA, ± remplissage
Step 3  Check       scripts/check_completeness.py → missing fields per patient
Step 4  Imaging     pre-op 3D-CT from PACS, 2 observers (§7)
Step 5  Recall      main-study patients first: recurrence, revision, WOSI, OIS, sport; clinic for Rowe/ER2/X-ray
Step 6  Lock        re-run the build and checker; freeze the version
Step 7  Analysis    §9
```

Recall order: (1) main study, no contact since surgery (124); (2) main study, some contact (31);
(3) Latarjet reference (11); then the rest. 17 main-study patients have no phone number on any record and
need the hospital file.

## 9. Statistical analysis plan
- **Descriptives.** Baseline by group: age, sex, sport and level, ISIS, number of dislocations, bone loss,
  track status, Hill-Sachs, remplissage, number of anchors.
- **Primary.**
  - Kaplan–Meier recurrence-free survival by group, with a log-rank test.
  - Cox model adjusted for the main confounders.
  - Few events are expected (about 10–15), so adjustment uses a **propensity score** (inverse-probability
    weighting) built from age under 20, contact or collision sport, ISIS, bone loss band and track status,
    rather than many covariates in the model.
  - Both groups are also reported at a **fixed 2-year horizon**, because the knotless group has longer
    follow-up and late failures accumulate.
- **Remplissage confounding.** Remplissage is part of the BRUMA strategy (82% of BRUMA vs 19% of
  knotless). Report:
  1. the whole-strategy comparison (primary)
  2. stratified results, Bankart-only and Bankart + remplissage separately
  3. a model including remplissage and Hill-Sachs status
- **Era and learning curve.** Run a sensitivity analysis restricted to 2018–2020, when both techniques were
  in use, and one excluding each technique's first 10 cases.
- **WOSI.** ANCOVA adjusted for pre-op WOSI where available, plus the proportion reaching the MCID.
- **Subgroups.** Recurrence by bone loss band (< 13.5%, 13.5–20%, > 20%) × track status, with 95% CIs,
  shown against the published Latarjet and Bankart + remplissage benchmarks (literature/02).
- **ER2.** ANCOVA of final ER2 adjusted for pre-op; side-to-side deficit.
- **Missing data.** Complete-case analysis plus multiple imputation (MICE, 20 datasets) for tier-B
  covariates. Compare patients lost to follow-up with those retained.
- Two-sided α = 0.05; R.

### Power
| Question | Needed per group | Available (67 / 88) |
|---|---|---|
| WOSI difference at MCID (SD about 20–25) | 39–60 | Enough, if about 75% are reached at recall |
| Recurrence 18% vs 4% | about 78 | Borderline |
| Recurrence 15% vs 5% | about 141 | Not enough |

So recurrence is reported with 95% CIs and an adjusted hazard ratio, and **WOSI carries the formal
comparison**. This limitation is stated explicitly.

## 10. Planned tables & figures
1. **Fig 1:** STROBE flow, from all instability patients (393) through exclusions and loss to follow-up to
   those analysed.
2. **Table 1:** Baseline by technique, including bone loss, track status and remplissage.
3. **Table 2:** Recurrence, revision and composite failure: crude, at 2 years, adjusted HR.
4. **Table 3:** Recurrence by bone loss band × track status, by technique, with Latarjet and literature
   benchmarks.
5. **Table 4:** WOSI, OIS, Rowe and ER2 (pre-op where available, final, Δ, % reaching MCID).
6. **Table 5:** Complications and reoperations; anchors used.
7. **Fig 2:** Kaplan–Meier recurrence-free survival by technique.
8. **Fig 3:** Bone loss % vs Hill-Sachs interval with the glenoid-track line, coloured by recurrence and
   technique.
9. **Supplement:** missing data, ICCs, sensitivity analyses (overlap era, learning curve, stratified by
   remplissage).

## 11. Timeline
| Week | Task |
|---|---|
| 1 | IEC submission; CTRI registration; finalise this protocol |
| 1–3 | Pull pre-op 3D-CT for the 155 main-study patients; reliability subset |
| 1–6 | Recall: priority 1 and 2 first (WOSI, OIS, recurrence, sport) |
| 6–7 | Clinic visits for Rowe, ER2 and X-ray |
| 8 | Data lock; analysis |
| 9–11 | Manuscript (IMRaD); target journal |

## 12. Decisions
| # | Question | Answer |
|---|---|---|
| 1 | Own cohort or SR/MA | **Own patients** |
| 2 | Comparison | **BRUMA ± remplissage vs knotless ± remplissage** (re-scoped 7 Oct 2026) |
| 3 | Imaging | **3D-CT** |
| 4 | Journal | **International.** *OJSM* (published the BRUMA series), *AJSM*, *Arthroscopy*, *JSES*, *KSSTA* |
| 5 | Date range | **Aug 2014 – 7 Oct 2024** for the main study |
| 6 | Technique source | Surgeon's list; otherwise by date |
| 7 | Remplissage indication | Every Hill-Sachs in the BRUMA era; selective in the knotless era |
| 8 | Peripheral-track definition | **DTD < 8 mm** |
| 9 | Oxford Instability Score | Reported on the current 0–48 scale. The surgeon's sheet stored 12–60 with higher = better (cross-checked against scored forms) and was converted as value − 12 |
| 10 | First-time dislocators, revisions | First-timers included and flagged; revisions analysed separately |

## 13. Data source
The practice's records system: OT register, op notes, implant records, OPD follow-up and every spreadsheet
imported into it, plus the surgeon's technique list and PACS (3D-CT).

> 🔒 **Privacy:** patient-level data is kept outside this repository, which holds the clinic website.
> Only de-identified, aggregate counts appear here.
