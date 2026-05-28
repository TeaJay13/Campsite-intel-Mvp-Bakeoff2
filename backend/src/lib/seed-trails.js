import { Trail } from "../models/trail.model.js";

const seedTrails = [
  {
    name: "Pine Ridge Loop",
    location: "Blue Mountain Park",
    difficulty: "moderate",
    distanceKm: 6.4,
    elevationGainM: 280,
    description: "Forest loop with ridge viewpoints.",
    status: "active"
  },
  {
    name: "Riverbend Path",
    location: "Cedar Valley",
    difficulty: "easy",
    distanceKm: 3.1,
    elevationGainM: 45,
    description: "Flat river-side trail suitable for beginners.",
    status: "active"
  },
  {
    name: "Summit Spur",
    location: "Eagle Peak Reserve",
    difficulty: "hard",
    distanceKm: 9.2,
    elevationGainM: 720,
    description: "Steeper ascent with exposed sections near summit.",
    status: "active"
  },
  {
    name: "Meadow Walk",
    location: "Sunflower Valley",
    difficulty: "easy",
    distanceKm: 2.5,
    elevationGainM: 20,
    description: "Gentle stroll through open wildflower meadows.",
    status: "active"
  },
  {
    name: "Granite Peak Trail",
    location: "Rockfall Canyon",
    difficulty: "hard",
    distanceKm: 11.8,
    elevationGainM: 950,
    description: "Technical route over granite formations with panoramic summit views.",
    status: "active"
  },
  {
    name: "Lakeside Circuit",
    location: "Mirror Lake Park",
    difficulty: "moderate",
    distanceKm: 7.6,
    elevationGainM: 190,
    description: "Scenic loop around the lake with shaded forest sections.",
    status: "active"
  }
];

export async function seedTrailsIfEmpty() {
  const total = await Trail.countDocuments();

  if (total > 0) {
    return { seeded: false, inserted: 0 };
  }

  const inserted = await Trail.insertMany(seedTrails);

  return { seeded: true, inserted: inserted.length };
}
