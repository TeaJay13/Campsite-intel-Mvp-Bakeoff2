import { getTrailDetail, listTrails } from "../services/trails.service.js";
import {
  trailIdParamSchema,
  trailsListQuerySchema
} from "../api/schemas/trails.schema.js";

export async function registerTrailRoutes(app) {
  app.get(
    "/",
    {
      schema: {
        querystring: trailsListQuerySchema
      }
    },
    async (request) => {
      const { q, difficulty, page, limit } = request.query;
      return listTrails({ q, difficulty, page, limit });
    }
  );

  app.get(
    "/:trailId",
    {
      schema: {
        params: trailIdParamSchema
      }
    },
    async (request, reply) => {
      const trail = await getTrailDetail(request.params.trailId);

      if (!trail) {
        return reply.code(404).send({
          error: "not_found",
          message: "Trail not found"
        });
      }

      return trail;
    }
  );
}
