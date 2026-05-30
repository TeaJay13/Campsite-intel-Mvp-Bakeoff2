const objectIdPattern = "^[a-fA-F0-9]{24}$";

export const trailsListQuerySchema = {
  type: "object",
  properties: {
    q: { type: "string", minLength: 1, maxLength: 120 },
    difficulty: { type: "string", enum: ["easy", "moderate", "hard"] },
    page: { type: "integer", minimum: 1, default: 1 },
    limit: { type: "integer", minimum: 1, maximum: 100, default: 20 }
  }
};

export const trailIdParamSchema = {
  type: "object",
  required: ["trailId"],
  properties: {
    trailId: { type: "string", pattern: objectIdPattern }
  }
};
