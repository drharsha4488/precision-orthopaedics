# Research: Bankart vs Bankart + Remplissage vs Latarjet

Paper workspace for anterior shoulder instability. Work moves through it in order:

| Phase | File | Status |
|---|---|---|
| 1. Background research | [`01_literature_review.md`](01_literature_review.md) | Draft. Verify ⚠️ refs on PubMed |
| 2. Protocol & data plan | [`02_study_protocol_and_data_plan.md`](02_study_protocol_and_data_plan.md) | Draft. Answer decisions in §13 |
| 3. Data collection | [`data/data_dictionary.csv`](data/data_dictionary.csv), [`data/data_collection_template.csv`](data/data_collection_template.csv) | Template ready |
| 4. Fill incomplete records | `scripts/check_completeness.py` → recall list | Tool ready |
| 5. Analysis | n/a | Not started |
| 6. Manuscript | n/a | Not started |

## Collecting data
1. Copy `data/data_collection_template.csv` to `data/cohort_v1.csv`. The `data/` folder
   is git-ignored, so the filled file stays local. Fill it in Excel or Google Sheets
   using the codes in the dictionary.
2. Run:
   ```bash
   python3 scripts/check_completeness.py data/cohort_v1.csv
   ```
   This writes `cohort_v1_checked.csv` with GBL%, glenoid track, on/off-track, DTD, ISIS,
   recurrence and follow-up auto-computed. It also writes
   `cohort_v1_checked_recall_list.csv`, which lists the missing tier-A/B fields and
   invalid entries for each patient, sorted by priority.
3. Fill the gaps (chart, imaging re-measure, phone/clinic recall) and re-run until
   tier A is complete.

**De-identified data only. Never commit patient files to this repository.**
