# Quickstart: Hiking Trail MVP Platform

## Prerequisites
- Node.js 20+
- MongoDB Atlas URI (or local MongoDB)
- npm 10+

## Environment
Create environment files:

### backend/.env
- NODE_ENV=development
- PORT=4000
- MONGODB_URI=<your_mongodb_uri>
- JWT_ACCESS_SECRET=<long_random_secret>
- JWT_REFRESH_SECRET=<long_random_secret>

### frontend/.env
- PUBLIC_API_BASE_URL=http://localhost:4000

## Install dependencies
1. Install backend dependencies in backend/.
2. Install frontend dependencies in frontend/.

## Run development
1. Start backend API server.
2. Start Astro frontend dev server.
3. Open app in browser and verify landing page.

## MVP verification checklist
1. Auth:
   - Sign up creates account.
   - Login returns authenticated session/token.
   - Logout invalidates active session and revokes active refresh token server-side.
2. Core feature:
   - Browse trail list.
   - Open trail detail page.
   - Create/edit/delete review on a trail as authenticated user.
   - Verify one review per user per trail (second create attempt uses update flow).
   - Verify trails are DB-backed and seeded/admin-managed in MVP.
3. Favorites:
   - Add trail to favorites.
   - Remove trail from favorites.
   - Duplicate favorite attempt returns conflict.
4. Responsive UI:
   - Verify key flows at 375px width and desktop width.
5. Validation and errors:
   - Invalid payloads return structured 4xx responses.
   - Unauthorized operations are blocked with 401/403.
   - Duplicate favorites and duplicate review-create attempts return conflict behavior.

## Test
1. Run backend unit/integration/contract tests.
2. Run frontend tests for critical responsive and interaction flows.
