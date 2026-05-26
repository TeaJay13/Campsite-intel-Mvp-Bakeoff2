# Data Model: Hiking Trail MVP Platform

## Entity: User
- Fields:
  - id: ObjectId (primary)
  - email: string (required, unique, normalized)
  - passwordHash: string (required)
  - displayName: string (required, 2-50 chars)
  - role: enum(user, admin), default user
  - createdAt: datetime
  - updatedAt: datetime
- Validation rules:
  - email must be valid format
  - passwordHash must exist for local auth
- Relationships:
  - one-to-many with Favorite
  - one-to-many with Review

## Entity: Trail
- Fields:
  - id: ObjectId (primary)
  - name: string (required, 3-120 chars)
  - location: string (required)
  - difficulty: enum(easy, moderate, hard)
  - distanceKm: number (>= 0)
  - elevationGainM: number (>= 0)
  - description: string (optional, <= 2000 chars)
  - createdAt: datetime
  - updatedAt: datetime
- Validation rules:
  - name and location required
  - distance/elevation non-negative
- Relationships:
  - one-to-many with Review
  - one-to-many with Favorite

## Entity: Favorite
- Fields:
  - id: ObjectId (primary)
  - userId: ObjectId (required, ref User)
  - trailId: ObjectId (required, ref Trail)
  - createdAt: datetime
- Validation rules:
  - unique compound index on userId + trailId
- Relationships:
  - belongs to one User
  - belongs to one Trail

## Entity: Review
- Fields:
  - id: ObjectId (primary)
  - userId: ObjectId (required, ref User)
  - trailId: ObjectId (required, ref Trail)
  - rating: integer (required, 1-5)
  - comment: string (required, 1-2000 chars)
  - createdAt: datetime
  - updatedAt: datetime
- Validation rules:
  - rating in range 1-5
  - comment required
  - unique compound index on userId + trailId (one review per user per trail)
- Relationships:
  - belongs to one User
  - belongs to one Trail

## Entity: RefreshToken
- Fields:
  - id: ObjectId (primary)
  - userId: ObjectId (required, ref User)
  - tokenHash: string (required)
  - expiresAt: datetime (required)
  - revokedAt: datetime (nullable)
  - createdAt: datetime
- Validation rules:
  - tokenHash required
  - revokedAt set on logout for immediate revocation
- Relationships:
  - belongs to one User

## Relationship and integrity rules
- Delete strategy:
  - Trail deletion is soft-delete or restricted in MVP to avoid orphaned reviews/favorites.
  - User deletion is out of MVP scope; if implemented later, must cascade/cleanup related reviews/favorites.
- Ownership rules:
  - Review update/delete requires review.userId == authenticated user id (or admin role).
  - Favorite delete requires favorite.userId == authenticated user id.
  - Trail create/update/delete is admin/seed-managed only in MVP.

## State transitions
- Favorite:
  - not-favorited -> favorited on create
  - favorited -> not-favorited on delete
- Review:
  - absent -> created
  - created -> updated
  - created/updated -> deleted
