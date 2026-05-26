# Tasks: Hiking Trail MVP Platform

**Input**: Design documents from `/specs/001-trail-campsite-platform/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Test-specific tasks are omitted because the feature spec does not explicitly require TDD.

**Organization**: Tasks are grouped by user story to keep each story independently implementable and testable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Parallelizable task (different files, no unmet dependency)
- **[Story]**: Story label for user story phases only (`[US1]`, `[US2]`, `[US3]`)
- Include exact file paths in every task description

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize frontend/backend projects and baseline tooling.

- [x] T001 Create project workspace structure in backend/ and frontend/ with initial README in specs/001-trail-campsite-platform/README.md
- [x] T002 Initialize backend npm project and scripts in backend/package.json
- [x] T003 [P] Initialize Astro frontend npm project and scripts in frontend/package.json
- [x] T004 [P] Add backend environment template in backend/.env.example
- [x] T005 [P] Add frontend environment template in frontend/.env.example
- [x] T006 Configure lint and format tooling in backend/eslint.config.js and frontend/eslint.config.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build shared architecture, auth plumbing, and core models required by all stories.

**CRITICAL**: No user story implementation starts before this phase completes.

- [x] T007 Bootstrap Fastify app and plugin loading in backend/src/app.js
- [x] T008 [P] Implement MongoDB connection plugin in backend/src/plugins/db.js
- [x] T009 [P] Implement global structured error handling in backend/src/plugins/error-handler.js
- [x] T010 [P] Implement JWT plus cookie auth plugin in backend/src/plugins/auth.js
- [x] T011 Implement base request schema utilities in backend/src/api/schemas/common.schema.js
- [x] T012 [P] Create User and Trail models in backend/src/models/user.model.js and backend/src/models/trail.model.js
- [x] T013 [P] Create Favorite and Review models with unique indexes in backend/src/models/favorite.model.js and backend/src/models/review.model.js
- [x] T014 [P] Create RefreshToken model for server-side revocation in backend/src/models/refresh-token.model.js
- [x] T015 Implement route registry and versioned API mount in backend/src/routes/index.js
- [x] T016 Create shared API client and auth-aware fetch helper in frontend/src/services/api-client.js
- [x] T017 Create responsive base layout and navigation shell in frontend/src/layouts/BaseLayout.astro and frontend/src/components/NavBar.astro

**Checkpoint**: Foundation complete; user story phases can begin.

---

## Phase 3: User Story 1 - Discover Trails (Priority: P1)

**Goal**: Visitors can browse, search, and view trail details.

**Independent Test**: Open list page, search by query, open trail detail, verify empty state for no matches.

### Implementation for User Story 1

- [x] T018 [US1] Implement trails list endpoint with search and pagination in backend/src/routes/trails.routes.js and backend/src/services/trails.service.js
- [x] T019 [P] [US1] Add trail list query validation in backend/src/api/schemas/trails.schema.js
- [x] T020 [US1] Implement trail detail endpoint with 404 handling in backend/src/routes/trails.routes.js and backend/src/services/trails.service.js
- [x] T021 [P] [US1] Implement DB seed loader for admin/seed-managed trails in backend/src/lib/seed-trails.js
- [x] T022 [P] [US1] Implement trail list UI with search and empty states in frontend/src/pages/trails/index.astro
- [x] T023 [US1] Implement trail detail UI with review feed rendering in frontend/src/pages/trails/[trailId].astro
- [x] T024 [P] [US1] Add frontend trail service methods in frontend/src/services/trails.service.js

**Checkpoint**: US1 works independently without authentication.

---

## Phase 4: User Story 2 - Authenticate and Manage Favorites (Priority: P2)

**Goal**: Users can sign up, log in, refresh sessions, log out, and manage favorites.

**Independent Test**: Register, log in, refresh token path, favorite/unfavorite trail, log out, confirm refresh token is revoked.

### Implementation for User Story 2

- [ ] T025 [US2] Implement signup and login service logic in backend/src/services/auth.service.js
- [ ] T026 [US2] Implement refresh token issuance, hashing, and rotation in backend/src/services/token.service.js
- [ ] T027 [US2] Implement logout with server-side refresh-token revocation in backend/src/services/token.service.js and backend/src/routes/auth.routes.js
- [ ] T028 [P] [US2] Implement auth routes signup/login/refresh/logout in backend/src/routes/auth.routes.js
- [ ] T029 [US2] Implement favorites add/remove endpoints with ownership and duplicate checks in backend/src/routes/favorites.routes.js and backend/src/services/favorites.service.js
- [ ] T030 [P] [US2] Add auth forms and client-side validation states in frontend/src/pages/signup.astro and frontend/src/pages/login.astro
- [ ] T031 [P] [US2] Implement favorite toggle component in frontend/src/components/FavoriteButton.astro
- [ ] T032 [US2] Implement favorites page and data loading in frontend/src/pages/favorites.astro and frontend/src/services/favorites.service.js
- [ ] T033 [US2] Implement frontend auth state handling for cookie-based session flow in frontend/src/services/auth.service.js

**Checkpoint**: US2 auth and favorites flows are independently functional.

---

## Phase 5: User Story 3 - Create and Manage Reviews (Priority: P3)

**Goal**: Authenticated users can create, edit, and delete one review per trail they own.

**Independent Test**: Log in, create review, update same review, delete review, verify non-owner update/delete fails.

### Implementation for User Story 3

- [ ] T034 [US3] Implement create review endpoint with one-review-per-user-per-trail conflict handling in backend/src/routes/reviews.routes.js and backend/src/services/reviews.service.js
- [ ] T035 [US3] Implement update review endpoint with ownership checks in backend/src/routes/reviews.routes.js and backend/src/services/reviews.service.js
- [ ] T036 [US3] Implement delete review endpoint with ownership checks in backend/src/routes/reviews.routes.js and backend/src/services/reviews.service.js
- [ ] T037 [P] [US3] Add review request validation schemas in backend/src/api/schemas/reviews.schema.js
- [ ] T038 [P] [US3] Implement review form component with create/edit mode in frontend/src/components/ReviewForm.astro
- [ ] T039 [US3] Implement review list and owner action controls in frontend/src/components/ReviewList.astro
- [ ] T040 [P] [US3] Add frontend review API methods in frontend/src/services/reviews.service.js
- [ ] T041 [US3] Wire review CRUD interactions into trail detail page in frontend/src/pages/trails/[trailId].astro

**Checkpoint**: US3 review CRUD is independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Ensure conformance, performance, accessibility, and documentation quality.

- [ ] T042 [P] Reconcile API implementation against contract in specs/001-trail-campsite-platform/contracts/openapi.yaml and backend/src/routes/index.js
- [ ] T043 [P] Harden edge-case error paths (invalid ID, unauthorized, duplicate favorite/review) in backend/src/services/auth.service.js, backend/src/services/favorites.service.js, and backend/src/services/reviews.service.js
- [ ] T044 [P] Improve responsive and accessibility behavior for key pages in frontend/src/layouts/BaseLayout.astro, frontend/src/pages/trails/index.astro, and frontend/src/pages/trails/[trailId].astro
- [ ] T045 Validate quickstart instructions and update verification checklist in specs/001-trail-campsite-platform/quickstart.md
- [ ] T046 Document final implementation decisions and any deviations in specs/001-trail-campsite-platform/plan.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies
- **Phase 2 (Foundational)**: Depends on Phase 1 and blocks all user stories
- **Phase 3 (US1)**: Depends on Phase 2
- **Phase 4 (US2)**: Depends on Phase 2
- **Phase 5 (US3)**: Depends on Phase 2 and benefits from US1 detail view readiness
- **Phase 6 (Polish)**: Depends on completion of selected user stories

### User Story Dependencies

- **US1 (P1)**: Starts after foundational completion; independent of US2 and US3
- **US2 (P2)**: Starts after foundational completion; can integrate with existing US1 trail pages
- **US3 (P3)**: Starts after foundational completion; requires auth capabilities from US2

### Within Each User Story

- Implement schema/model constraints before service logic
- Implement service logic before route/controller wiring
- Implement backend endpoints before frontend integration
- Validate story checkpoint before moving to the next priority

---

## Parallel Opportunities

- Setup: T003, T004, T005, T006
- Foundational: T008, T009, T010, T012, T013, T014, T016, T017
- US1: T019, T021, T022, T024
- US2: T028, T030, T031, T033
- US3: T037, T038, T040
- Polish: T042, T043, T044

---

## Parallel Example: User Story 1

```bash
Task: "T019 [US1] Add trail list query validation in backend/src/api/schemas/trails.schema.js"
Task: "T022 [US1] Implement trail list UI with search and empty states in frontend/src/pages/trails/index.astro"
Task: "T024 [US1] Add frontend trail service methods in frontend/src/services/trails.service.js"
```

## Parallel Example: User Story 2

```bash
Task: "T028 [US2] Implement auth routes signup/login/refresh/logout in backend/src/routes/auth.routes.js"
Task: "T030 [US2] Add auth forms and validation states in frontend/src/pages/signup.astro and frontend/src/pages/login.astro"
Task: "T031 [US2] Implement favorite toggle component in frontend/src/components/FavoriteButton.astro"
```

## Parallel Example: User Story 3

```bash
Task: "T037 [US3] Add review request validation schemas in backend/src/api/schemas/reviews.schema.js"
Task: "T038 [US3] Implement review form component in frontend/src/components/ReviewForm.astro"
Task: "T040 [US3] Add frontend review API methods in frontend/src/services/reviews.service.js"
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1 and Phase 2
2. Deliver US1 (trail discovery)
3. Deliver US2 (auth plus favorites) to satisfy MVP auth requirement
4. Validate MVP via specs/001-trail-campsite-platform/quickstart.md
5. Demo/deploy MVP before moving to US3

### Incremental Delivery

1. Foundation first (Setup plus Foundational)
2. Deliver US1 and validate
3. Deliver US2 and validate
4. Deliver US3 and validate
5. Complete polish and documentation

### Parallel Team Strategy

1. Team completes Setup and Foundational phases together
2. After foundational completion:
   - Developer A: US1
   - Developer B: US2
   - Developer C: US3 backend prep tasks
3. Merge and polish once story checkpoints pass

---

## Notes

- [P] tasks are designed for non-conflicting file-level parallel execution
- Story labels map directly to spec priorities for traceability
- Tasks encode clarified constraints: refresh revocation, one review per user per trail, and admin/seed-managed trails
