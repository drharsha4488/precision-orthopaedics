# Research: BRUMA (Mason-Allen) Bankart ± Remplissage vs Knotless Bankart

Paper workspace for anterior shoulder instability. It was re-scoped on 7 Oct 2026 from "Bankart vs Bankart +
remplissage vs Latarjet" to a comparison of the practice's two Bankart strategies, stratified by 3D-CT bone
loss. Work moves through it in order:

| Phase | File | Status |
|---|---|---|
| 1. Background research | [`01_literature_review.md`](01_literature_review.md), [`literature/`](literature/) | Done. `literature/` holds 3 PubMed-verified reports (PMIDs and DOIs); the older brief keeps its ⚠️ items |
| 2. Protocol & data plan | [`02_study_protocol_and_data_plan.md`](02_study_protocol_and_data_plan.md) | Re-scoped draft; decisions in §12 |
| 3. Data collection | [`data/data_dictionary.csv`](data/data_dictionary.csv) | Cohort built from the practice records: 393 instability patients; main study knotless 67 vs BRUMA 88 |
| 4. Fill incomplete records | `scripts/check_completeness.py` → recall list | Recall list ready (155 main-study patients first); 3D-CT measurement next |
| 5. Analysis | n/a | Not started |
| 6. Manuscript | n/a | Not started |

## Where the data lives
Patient-level files (the cohort, recall list and ID key) are built from the practice's records into a
**private folder outside this repository**. This repository holds the clinic website and is public. It keeps
only the protocol, literature, data dictionary and blank template.

## Checking a filled dataset
```bash
python3 scripts/check_completeness.py path/to/cohort_v1.csv
```
This computes GBL%, glenoid track, on/off-track, DTD, ISIS, recurrence and follow-up, and writes the missing
tier-A/B fields and invalid entries for each patient, sorted by priority.

**De-identified data only. Never commit patient files to this repository.**
