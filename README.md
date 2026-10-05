# CSCI322 — افهم البيانات

Arabic visual study guide for Lecture 1, Lecture 2 and Labs 01–02. English technical terminology is preserved.

Includes 23 teaching sections, interactive sampling, imputation, Pearson and chi-square demonstrations, a real-data age distribution comparison, 66 MCQs and 10 written questions with explanations and source locations. The question bank is original study material, not an official exam.

## Run

Requires Node.js 20 or later. No dependency installation or build is required.

```sh
npm run dev
npm run check
```

Open http://127.0.0.1:4173. Deploy this repository on Vercel with Framework Preset **Other**, no build command and Output Directory **.**.

## Sources and boundaries

Primary sources: the supplied CSCI322 Lecture 1 (41 pages), Lecture 2 (38 pages), Session 01/02 notebooks, heart.csv and customers.csv. Section citations identify PDF page numbers, counting from page 1, and notebook headings. Text is rewritten as an educational explanation, rather than reproducing slides or textbooks.

The course names *Data Mining: Concepts and Techniques* and *Statistical Analysis Handbook* as references. Full books were not supplied; no unseen passages or textbook exercises are attributed to them. Official Pandas and SciPy documentation is linked for code and statistical verification.

Corrections are called out: `tail(3)`, label vs position slicing, mapping already-mapped strings, integer cluster labels, `.corr(other)`, quota vs stratified sampling, exact allocation, alpha vs p-value, consistent covariance denominators and interpreting zero correlation.

Only aggregate statistics are shipped. Original PDFs, notebooks, raw customer identifiers and full CSV datasets stay outside the repository. Code samples expect the student's original CSV files. Heart `target` is treated as a supplied class code; no independent medical data dictionary was supplied.

Question selections live only in memory. The color theme is a browser-local preference. There are no accounts, analytics trackers or external backend services. Google Fonts supplies the optional Arabic typeface; system fonts provide fallback.

Design reference: https://openai.com/ar/index/introducing-gpt-6-1-sol/ (editorial spacing, neutral palette and reading hierarchy). This is an independent study guide with its own identity.
