# Delivery checklist

| Requirement | Implementation / verification |
|---|---|
| React, TypeScript, Vite | `src/`, strict `tsconfig.json`; production build passes |
| Data notes normalization | `src/lib/orders.ts`; unit tests cover versions, dates, casing, duplicate choice |
| 50k rendering | fixed-height custom virtual window with overscan in `App.tsx`; visually checked with full data |
| Sorting / resize / pin | clickable headers, pointer resize handles, one sticky pinned column |
| Selection / keyboard / details | click/shift range; arrows, Space, Enter; details drawer |
| Typed filter builder | `src/lib/query.ts`, field-aware controls, OR groups and AND composition |
| URL persistence | debounced `q` state, browser navigation listener, malformed fallback message |
| Export | `src/lib/csv.ts`; all selected IDs exported, escaping and formula neutralization |
| Empty/error states | clear-filter empty state and non-blocking notices |
| Design artifacts | `design/normal-state.svg`, `design/empty-state.svg` |
| Checks | `npm run test` (4 passing), `npm run build` (passing) |
