import { Favorite } from "../models/favorite.model.js";
import { Trail } from "../models/trail.model.js";

export async function getUserFavorites(userId) {
  const favorites = await Favorite.find({ userId }).lean();
  if (favorites.length === 0) return { items: [] };

  const trailIds = favorites.map((f) => f.trailId);
  const trails = await Trail.find({ _id: { $in: trailIds } }).lean();

  return { items: trails };
}

export async function addFavorite(userId, trailId) {
  const trail = await Trail.findById(trailId);
  if (!trail) {
    const err = new Error("Trail not found");
    err.statusCode = 404;
    throw err;
  }

  try {
    await Favorite.create({ userId, trailId });
  } catch (err) {
    if (err.code === 11000) {
      return { added: false, message: "Already in favorites" };
    }
    throw err;
  }

  return { added: true };
}

export async function removeFavorite(userId, trailId) {
  await Favorite.deleteOne({ userId, trailId });
  return { removed: true };
}
