# UPS-100 — ziko1/videobezpeka.pp.ua

- Date: 2026-10-15.
- Platform classification: media (**provisional**, inspect real code before asserting journeys).
- Status: DOCS_CANDIDATE / performance NOT MEASURED / deployment NOT VERIFIED.
- Local budget manifest: docs/UPS100_BUDGET.json.
- Shared UPS-100 canonical policy is owned centrally; this file and AGENTS.md carry the applicable requirements without exposing private internal infrastructure.

## Obligatory engineering gates

1. Inventory exact branch SHA, architecture, dependencies, baseline test/device/network data; keep existing files and accepted interfaces.
2. Define 3–5 measurable journeys; local A/B critical feedback p95 <=100 ms. Real feedback must be meaningful, not a fake completed action.
3. Web if present: p75 field INP <=200 ms, LCP <=2500 ms, CLS <=0.1, separately mobile/desktop; internal targets 100/1800/0.05. Lab does not replace RUM.
4. Lightweight C1 backend if present: server-side p95 <=100 ms, p99 <=250 ms. Complex auth/DB/AI/media/geolocation require scenario-specific SLO, timeouts and truthful progress.
5. Mobile if present: cold/warm/hot startup 500/200/150 ms engineering targets plus frame, ANR, memory, battery, background and offline tests on actual devices.
6. Before/after performance measurements from trusted instrumentation; p50/p75/p95/p99/max, sample count, error rate, exact SHA, cache, device, network, concurrency, time. Never infer field PASS from a source manifest.
7. Validate auth, tenant isolation, data integrity, accessibility, privacy, SEO where applicable, resource/cost budget, rollback and independent QA.
8. The VPS daily UPS-100 fleet check reads evidence manifests when available. A remote-only repo without an authorized local checkout or telemetry remains UNKNOWN. Do not start paid GitHub Actions or production load testing.
9. Stage changes in isolated branches, retain product memory/roadmap/backlog separately, review diffs before any merge/deploy. Future status only changes with real evidence.

All initial entries in the JSON budget are planned measurement definitions. The first automatic verifier run must correctly return UNKNOWN while sample_count=0 and evidence is absent.
