import { Review } from "../models/review.model.js";
import { Trail } from "../models/trail.model.js";
import { User } from "../models/user.model.js";

async function assertTrailExists(trailId) {
  const trail = await Trail.findOne({ _id: trailId, status: "active" }).lean();
  if (!trail) {
    const err = new Error("Trail not found");
    err.statusCode = 404;
    throw err;
  }
}

function formatReview(review) {
  return {
    id: String(review._id),
    trailId: String(review.trailId),
    userId: String(review.userId?._id ?? review.userId),
    reviewerName: review.userId?.displayName ?? "Trail User",
    rating: review.rating,
    comment: review.comment,
    createdAt: review.createdAt,
    updatedAt: review.updatedAt
  };
}

export async function listTrailReviews(trailId) {
  await assertTrailExists(trailId);

  const items = await Review.find({ trailId })
    .sort({ updatedAt: -1 })
    .populate("userId", "displayName")
    .lean();

  return { items: items.map(formatReview) };
}

export async function createTrailReview({ userId, trailId, rating, comment }) {
  await assertTrailExists(trailId);

  let created;
  try {
    created = await Review.create({ userId, trailId, rating, comment });
  } catch (err) {
    if (err?.code === 11000) {
      const conflictErr = new Error("You already left a review for this trail");
      conflictErr.statusCode = 409;
      conflictErr.code = "review_exists";
      throw conflictErr;
    }
    throw err;
  }

  const user = await User.findById(userId).lean();

  return {
    item: {
      id: String(created._id),
      trailId: String(created.trailId),
      userId: String(created.userId),
      reviewerName: user?.displayName ?? "Trail User",
      rating: created.rating,
      comment: created.comment,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt
    }
  };
}

export async function updateTrailReview({ userId, trailId, rating, comment }) {
  await assertTrailExists(trailId);

  const existing = await Review.findOne({ userId, trailId });
  if (!existing) {
    const err = new Error("Review not found");
    err.statusCode = 404;
    throw err;
  }

  existing.rating = rating;
  existing.comment = comment;
  await existing.save();

  const user = await User.findById(userId).lean();

  return {
    item: {
      id: String(existing._id),
      trailId: String(existing.trailId),
      userId: String(existing.userId),
      reviewerName: user?.displayName ?? "Trail User",
      rating: existing.rating,
      comment: existing.comment,
      createdAt: existing.createdAt,
      updatedAt: existing.updatedAt
    }
  };
}

export async function deleteTrailReview({ userId, trailId }) {
  await assertTrailExists(trailId);

  const deleted = await Review.deleteOne({ userId, trailId });
  if (!deleted.deletedCount) {
    const err = new Error("Review not found");
    err.statusCode = 404;
    throw err;
  }

  return { removed: true };
}
