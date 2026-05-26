import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    trailId: { type: mongoose.Schema.Types.ObjectId, ref: "Trail", required: true, index: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true, minlength: 1, maxlength: 2000 }
  },
  { timestamps: true }
);

reviewSchema.index({ userId: 1, trailId: 1 }, { unique: true });

export const Review = mongoose.models.Review ?? mongoose.model("Review", reviewSchema);
