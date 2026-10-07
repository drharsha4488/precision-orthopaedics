# Study Protocol & Data Plan (Phase 2)

**Working title:** *Bankart Repair, Bankart with Remplissage, or Latarjet? Outcomes Stratified
by Bipolar Bone Loss and Glenoid-Track Status in Recurrent Anterior Shoulder Instability:
A Comparative Cohort Study*

> The default design below is a **retrospective comparative cohort study with
> prospective follow-up recall**, built from our own operated patients. If you would
> rather write a **systematic review / meta-analysis**, see §11. The data plan changes
> but the variable definitions stay the same.

---

## 1. Research questions

**Primary**
- In patients with recurrent traumatic anterior shoulder instability, how does the
  **recurrence of instability** (dislocation or subluxation) at a minimum 2-year
  follow-up differ between ABR, ABR+R and Latarjet?

**Secondary**
1. Functional outcomes (WOSI, Rowe, ASES, SANE, VAS) and change from preop.
2. Range of motion, especially **external rotation in abduction (ER2)**: does remplissage
   cost ER?
3. Return to sport (any, same level) and time to return.
4. Complications and reoperations.
5. **Subgroup/interaction analyses:** outcomes by GBL band (< 13.5%, 13.5–20%, > 20%),
   glenoid-track status (central-on / peripheral-on / off-track), DTD (continuous), and
   ISIS (≤ 3, 4–6, > 6).
6. Arthropathy progression (Samilson–Prieto preop to final).

## 2. Design & setting
- Retrospective cohort of consecutive patients operated between **[START DATE] and
  [END DATE]** (choose an end date ≥ 24 months before data lock) at **[CENTRE]**.
- Missing follow-up outcomes are completed **prospectively** by clinic recall or a
  structured phone/WhatsApp/video call. PROMs are self-administered and recorded with
  the date and mode.
- Reporting follows **STROBE**. Register the study (e.g. CTRI for India) and obtain
  **Institutional Ethics Committee approval** before data collection. Recall/phone
  contact needs patient consent. A waiver is possible for the chart-review part only.

## 3. Eligibility

**Inclusion**
- Age ≥ 14 years at surgery (skeletally mature)
- Recurrent (≥ 2 episodes) traumatic anterior instability, *or* a first-time dislocation
  in a high-risk patient where the surgeon chose to operate (flag this as a covariate)
- Primary stabilisation with one of ABR, ABR+R, or Latarjet (open or arthroscopic)
- Pre-operative CT (preferably 3D) or MRI that allows GBL and HSL measurement
- Minimum 24-month follow-up, *or* recurrence before 24 months (failures are kept)

**Exclusion**
- Posterior or multidirectional instability; voluntary/atraumatic instability
- Concomitant large rotator-cuff repair, fracture fixation (other than bony Bankart),
  or HAGL repair (or keep these and flag them, but decide now)
- Revision surgery (analyse as a **separate cohort**, not mixed in)
- Epilepsy-related instability (analyse separately or exclude)
- Other bone-block procedures (iliac crest, distal tibia allograft, Eden-Hybinette),
  open Bankart, or other HSL procedures (allograft, humeroplasty)

## 4. Exposure groups
| Code | Group |
|---|---|
| `BANKART` | Arthroscopic Bankart repair alone (± capsular plication, ± rotator-interval closure) |
| `BANKART_REMP` | Arthroscopic Bankart + Hill-Sachs remplissage |
| `LATARJET` | Latarjet (classic or congruent-arc), open or arthroscopic |

## 5. Outcomes
| Type | Variable | Definition |
|---|---|---|
| **Primary** | `recurrence_any` | Dislocation **or** subluxation (patient-reported or documented) at any time after surgery |
| Secondary | `redislocation` | Dislocation needing reduction or documented on imaging |
| Secondary | `apprehension_pos_final` | Positive anterior apprehension at final follow-up |
| Secondary | `revision_instability` | Further surgery for instability |
| Secondary | WOSI, Rowe, ASES, SANE, VAS | Preop, 12 mo, 24 mo, final |
| Secondary | FF, ER1, ER2, IR | Preop and final; **ER2 deficit vs contralateral** |
| Secondary | Return to sport | Any / same level / months |
| Secondary | Complications | Clavien–Dindo-style grading + type list |
| Secondary | Samilson–Prieto | Preop and final radiographs |

**Composite clinical failure** = recurrence_any **or** revision_instability **or**
positive apprehension that limits activity.

## 6. Imaging measurement protocol (most important for data quality)
All measurements follow a single written protocol by **two independent observers**
(one surgeon and one fellow/radiologist), blinded to group and outcome where possible.

1. **Glenoid:** en-face 3D-CT sagittal view with the humeral head subtracted (or the
   MRI sagittal oblique). Fit an inferior best-fit circle and record **D** (mm) and
   anterior defect width **d** (mm). `GBL% = d / D × 100`.
2. **Hill-Sachs:** 3D-CT posterior view of the humeral head (or MRI axial). Record
   **HS width** and **bone bridge** (cuff footprint to HSL lateral edge).
   `HSI = HS width + bone bridge`. Record **HS depth** as well.
3. **Glenoid track:** `GT = 0.83 × D − d`. **Off-track** if HSI > GT.
   `DTD = GT − HSI`. **Peripheral-track** if on-track and DTD < 25% of GT (Yamamoto)
   **or** DTD < 8 mm. Decide which definition you will use and keep it fixed.
4. **Reliability:** both observers measure a random **30 cases**, observer 1 re-measures
   them after ≥ 2 weeks, and ICCs are reported (inter- and intra-observer).
5. Latarjet **postop CT** (if available): graft position (flush / medial / lateral
   overhang in mm), height (below / at / above equator), union, osteolysis.

## 7. Data collection workflow

```
Step 1  Identify cohort ──► OT register / HIS / billing codes for the 3 procedures, date range
Step 2  Assign study_id ──► keep the ID ⇄ MRN key in a SEPARATE password-protected file
Step 3  Chart extraction ──► demographics, history, ISIS items, op note, complications
Step 4  Imaging review ──► GBL, HSI, GT, DTD (2 observers) using §6
Step 5  Completeness check ──► run scripts/check_completeness.py → list of missing fields per patient
Step 6  Fill gaps ──► clinic recall / phone PROMs (WOSI, Rowe, recurrence, RTS) — record date & mode
Step 7  Data lock ──► re-run checker; resolve queries; freeze dataset version
Step 8  Analysis ──► per §9
```

**Files in this folder**
- `data/data_dictionary.csv`: every variable with type, allowed values, definition,
  source, required flag and timepoint. This is the single source of truth.
- `data/data_collection_template.csv`: an empty sheet with one column per dictionary
  variable, ready for Excel/Google Sheets/REDCap import.
- `scripts/check_completeness.py`: validates a filled sheet against the dictionary,
  computes derived fields (GBL%, GT, track status, DTD, ISIS total, follow-up months),
  and lists missing or invalid values per patient.

> 🔒 **Privacy:** the filled dataset must be **de-identified** (no name, MRN, phone,
> exact DOB, address). This repository holds the clinic website, so patient data must
> **never be committed**. `.gitignore` in this folder blocks everything under `data/`
> except the dictionary and the blank template.

## 8. Missing data strategy ("filling the incomplete ones")
Missing fields are prioritised in tiers so effort goes where it matters:

| Tier | Fields | Action if missing |
|---|---|---|
| **A: essential** (cannot analyse without) | procedure group, age, surgery date, recurrence status, last follow-up date | Chart → phone recall. If still missing, the patient is **lost to follow-up**; report them in the flow diagram |
| **B: key covariates/outcomes** | GBL%, HSI/track status, ISIS items, WOSI/Rowe final, ER2 | Re-measure imaging; recall for PROMs/ROM. If still missing, use **multiple imputation** (MICE, 20 datasets) in sensitivity analysis |
| **C: descriptive** | BMI, anchors count, operative time, etc. | Fill from op notes if available, otherwise report as missing |

- Report the % missing for every variable in a supplementary table.
- Run a **complete-case** analysis plus a **multiple-imputation** sensitivity analysis.
- Compare baseline characteristics of patients lost to follow-up with those retained.

## 9. Statistical analysis plan
- **Descriptives:** mean ± SD or median (IQR); n (%). Baseline comparison across 3 groups
  with ANOVA/Kruskal–Wallis and χ²/Fisher.
- **Confounding by indication is the main threat.** Surgeons give Latarjet to patients
  with more bone loss. Handle it with:
  1. Multivariable **logistic regression** (or **Cox** for time-to-recurrence) adjusting
     for age, contact/competitive sport, number of preop dislocations, hyperlaxity, GBL%,
     track status/DTD, and follow-up length.
  2. **Propensity-score** methods (multinomial PS with inverse-probability weighting for
     3 groups, or pairwise matching ABR+R vs Latarjet) as a sensitivity analysis.
  3. **Stratified tables** by GBL band × track status. These are the "clinically
     readable" core result.
- **Kaplan–Meier** survival free of recurrence by group (log-rank).
- **PROMs:** mixed-effects model for repeated measures (time × group). Report MCID
  achievement (WOSI MCID ≈ 220 pts, ⚠️ verify reference value).
- **ER2:** ANCOVA of final ER2 adjusted for preop ER2. Also report side-to-side deficit.
- **Reliability:** ICC(2,1) with 95% CI for GBL, HSI, GT.
- Two-sided α = 0.05; software R or SPSS/Stata.

### Sample size / feasibility
- Detecting recurrence of 15% (ABR) vs 5% (Latarjet) with α = 0.05 and power = 0.80 needs
  **~140 per group**. Most single-centre series will be smaller.
- So, realistically: (a) frame recurrence comparisons as **descriptive with 95% CIs**,
  (b) power the study on **WOSI** (detecting a 220-point difference with SD ~ 350 needs
  **~40–45 per group**), and (c) state the limitation explicitly.
- First action item: **count the eligible patients per group** (Step 1) before anything else.

## 10. Planned tables & figures
1. **Fig 1:** STROBE flow diagram (identified → excluded → lost → analysed).
2. **Table 1:** baseline demographics, sport, ISIS, GBL, HSI, track status by group.
3. **Table 2:** recurrence/revision/apprehension by group (crude + adjusted OR/HR).
4. **Table 3:** recurrence stratified by GBL band × track status.
5. **Table 4:** PROMs and ROM (preop, final, Δ) by group.
6. **Table 5:** complications and reoperations.
7. **Fig 2:** Kaplan–Meier recurrence-free survival.
8. **Fig 3:** scatter of GBL% vs HSI with the glenoid-track line, coloured by outcome
   (a strong visual).
9. **Supplement:** missing-data table, ICCs, imputation sensitivity.

## 11. Alternative: systematic review / meta-analysis
If own-patient data are insufficient, the same framework becomes a PRISMA 2020 SR/MA:
- PROSPERO registration; databases PubMed, Embase, Cochrane, Scopus; search string
  combining *Bankart*, *remplissage*, *Latarjet / coracoid transfer*, *Hill-Sachs*,
  *glenoid bone loss*, *recurrent anterior instability*.
- Extraction sheet = the same data dictionary at **study level** (n, mean age, % contact,
  mean GBL%, % off-track, recurrence events, WOSI/Rowe mean ± SD, ER2, follow-up).
- Risk of bias: MINORS (non-randomised), RoB-2 (RCTs); GRADE certainty.
- Random-effects meta-analysis of recurrence (RR) and PROMs (MD).

## 12. Timeline (suggested)
| Week | Task |
|---|---|
| 1 | Finalise protocol, IEC submission, CTRI registration |
| 1–2 | Cohort identification and count per group |
| 2–5 | Chart + imaging extraction (2 observers) |
| 5 | Completeness check → recall list |
| 5–9 | Recall / phone follow-up to fill gaps |
| 10 | Data lock, analysis |
| 11–13 | Manuscript writing (IMRaD), target journal selection |

## 13. Decisions still needed from you
1. Own cohort (default) **or** SR/MA?
2. Date range and centre(s); approximate number of cases per procedure.
3. Include first-time dislocators? Include revisions as a separate cohort?
4. Latarjet: open, arthroscopic, or both?
5. Peripheral-track definition (DTD < 8 mm vs < 25% of GT).
6. Which imaging is routinely available (3D-CT for all, or MRI for some)?
7. Target journal (e.g. JSES, AJSM/OJSM, Arthroscopy, *Indian Journal of Orthopaedics*,
   JOOT/*Journal of Orthopaedics*). This changes word limits and reporting requirements.
