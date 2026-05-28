import {
  getUserFavorites,
  addFavorite,
  removeFavorite
} from "../services/favorites.service.js";

export async function registerFavoritesRoutes(app) {
  app.addHook("preHandler", app.authenticate);

  app.get("/", async (request, reply) => {
    const result = await getUserFavorites(request.user.sub);
    return reply.send(result);
  });

  app.post("/:trailId", async (request, reply) => {
    const result = await addFavorite(request.user.sub, request.params.trailId);
    return reply.code(201).send(result);
  });

  app.delete("/:trailId", async (request, reply) => {
    const result = await removeFavorite(request.user.sub, request.params.trailId);
    return reply.send(result);
  });
}
