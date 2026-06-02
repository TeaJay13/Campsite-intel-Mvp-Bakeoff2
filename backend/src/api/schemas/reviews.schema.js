const objectIdPattern = "^[a-fA-F0-9]{24}$";

export const reviewTrailParamSchema = {
  type: "object",
  required: ["trailId"],
  properties: {
    trailId: { type: "string", pattern: objectIdPattern }
  }
};

export const reviewBodySchema = {
  type: "object",
  required: ["rating", "comment"],
  properties: {
    rating: { type: "integer", minimum: 1, maximum: 5 },
    comment: { type: "string", minLength: 1, maxLength: 2000 }
  }
};
