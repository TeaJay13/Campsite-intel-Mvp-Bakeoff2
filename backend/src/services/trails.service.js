import mongoose from "mongoose";
import { Trail } from "../models/trail.model.js";
import { Review } from "../models/review.model.js";

function buildSearchFilter(query) {
  if (!query) {
    return { status: "active" };
  }

  return {
    status: "active",
    $or: [
      { name: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } }
    ]
  };
}

export async function listTrails({ q, page = 1, limit = 20 }) {
  const skip = (page - 1) * limit;
  const filter = buildSearchFilter(q);

  const [items, total] = await Promise.all([
    Trail.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Trail.countDocuments(filter)
  ]);

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit))
    }
  };
}

export async function getTrailDetail(trailId) {
  const id = new mongoose.Types.ObjectId(trailId);

  const trail = await Trail.findOne({ _id: id, status: "active" }).lean();

  if (!trail) {
    return null;
  }

  const recentReviews = await Review.find({ trailId: id })
    .sort({ updatedAt: -1 })
    .limit(10)
    .lean();

  return {
    ...trail,
    recentReviews
  };
}
