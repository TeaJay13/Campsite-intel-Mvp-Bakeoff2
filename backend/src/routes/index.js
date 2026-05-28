import { registerTrailRoutes } from "./trails.routes.js";
import { registerAuthRoutes } from "./auth.routes.js";
import { registerFavoritesRoutes } from "./favorites.routes.js";

export async function registerApiRoutes(app) {
  app.get("/health", async () => ({ status: "ok" }));

  app.register(
    async function v1Routes(v1) {
      v1.get("/health", async () => ({ status: "ok", version: "v1" }));
      v1.register(registerTrailRoutes, { prefix: "/trails" });
      v1.register(registerAuthRoutes, { prefix: "/auth" });
      v1.register(registerFavoritesRoutes, { prefix: "/favorites" });
    },
    { prefix: "/api/v1" }
  );
}
