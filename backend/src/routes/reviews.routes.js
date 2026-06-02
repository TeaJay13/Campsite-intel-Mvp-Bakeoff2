import {
  createTrailReview,
  deleteTrailReview,
  listTrailReviews,
  updateTrailReview
} from "../services/reviews.service.js";
import {
  reviewBodySchema,
  reviewTrailParamSchema
} from "../api/schemas/reviews.schema.js";

export async function registerReviewsRoutes(app) {
  app.addHook("preHandler", app.authenticate);

  app.get(
    "/trail/:trailId",
    {
      schema: {
        params: reviewTrailParamSchema
      }
    },
    async (request, reply) => {
      const result = await listTrailReviews(request.params.trailId);
      return reply.send(result);
    }
  );

  app.post(
    "/trail/:trailId",
    {
      schema: {
        params: reviewTrailParamSchema,
        body: reviewBodySchema
      }
    },
    async (request, reply) => {
      const result = await createTrailReview({
        userId: request.user.sub,
        trailId: request.params.trailId,
        rating: request.body.rating,
        comment: request.body.comment
      });
      return reply.code(201).send(result);
    }
  );

  app.patch(
    "/trail/:trailId",
    {
      schema: {
        params: reviewTrailParamSchema,
        body: reviewBodySchema
      }
    },
    async (request, reply) => {
      const result = await updateTrailReview({
        userId: request.user.sub,
        trailId: request.params.trailId,
        rating: request.body.rating,
        comment: request.body.comment
      });
      return reply.send(result);
    }
  );

  app.delete(
    "/trail/:trailId",
    {
      schema: {
        params: reviewTrailParamSchema
      }
    },
    async (request, reply) => {
      const result = await deleteTrailReview({
        userId: request.user.sub,
        trailId: request.params.trailId
      });
      return reply.send(result);
    }
  );
}
