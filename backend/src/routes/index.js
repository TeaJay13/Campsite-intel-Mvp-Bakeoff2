import { registerTrailRoutes } from "./trails.routes.js";

export async function registerApiRoutes(app) {
  app.get("/health", async () => ({ status: "ok" }));

  app.register(
    async function v1Routes(v1) {
      v1.get("/health", async () => ({ status: "ok", version: "v1" }));
      v1.register(registerTrailRoutes, { prefix: "/trails" });
    },
    { prefix: "/api/v1" }
  );
}
