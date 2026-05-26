import mongoose from "mongoose";

const trailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 },
    location: { type: String, required: true, trim: true },
    difficulty: { type: String, enum: ["easy", "moderate", "hard"], default: "moderate" },
    distanceKm: { type: Number, min: 0, default: 0 },
    elevationGainM: { type: Number, min: 0, default: 0 },
    description: { type: String, maxlength: 2000 },
    status: { type: String, enum: ["active", "archived"], default: "active" }
  },
  { timestamps: true }
);

export const Trail = mongoose.models.Trail ?? mongoose.model("Trail", trailSchema);
