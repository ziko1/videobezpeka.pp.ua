# ziko1/videobezpeka.pp.ua — UPS-100 governance

**Scope:** only this repository. Before changes inspect README, project instructions (when present), current branch/SHA/worktree, dependency and test contracts. Read docs/UPS100_ADOPTION_UK.md and docs/UPS100_BUDGET.json. Do not mix this repository with unrelated projects or replace existing governance.

**Internal critical action budget:** p95 <=100 ms from input to meaningful UI paint for new/modified local A/B actions on declared hardware. A fast placeholder is not proof of completed persistence. Handler work should be short. Network/AI/GPS/payment/media outcomes have separately measured SLOs.
**Web official field thresholds (where applicable):** mobile and desktop p75 INP <=200 ms, LCP <=2500 ms, CLS <=0.1; stricter internal goals: 100 ms / 1800 ms / 0.05.
**C1 API (where applicable):** internal server-side p95 <=100 ms and p99 <=250 ms on identified lightweight routes. Complex endpoints require separate baselines. Mobile startup, battery and frames require independent device testing.
**Evidence:** exact SHA/artifact, p50/p75/p95/p99/max, sample size and errors, device, network, cache, environment, profiler traces, baseline/candidate and independent review. No performance PASS with unmeasured values. A schema-only PASS_REPORTED is not real production proof.
**Safety:** never disable auth/tenant isolation, GDPR, accessibility, data correctness, secure caching or cost limits to reduce latency. Confirm CI quota before use; no paid workflows, unauthorized merge, live load tests, data deletion, deployment, store publication or cross-project actions.

Current state: this is a docs-only **UPS-100 adoption candidate**, not a merged release.