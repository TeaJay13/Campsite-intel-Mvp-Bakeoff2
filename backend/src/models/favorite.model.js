import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    trailId: { type: mongoose.Schema.Types.ObjectId, ref: "Trail", required: true, index: true }
  },
  { timestamps: true }
);

favoriteSchema.index({ userId: 1, trailId: 1 }, { unique: true });

export const Favorite =
  mongoose.models.Favorite ?? mongoose.model("Favorite", favoriteSchema);
