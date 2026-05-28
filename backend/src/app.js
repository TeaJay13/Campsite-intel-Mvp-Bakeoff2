import Fastify from "fastify";
import cors from "@fastify/cors";
import { pathToFileURL } from "node:url";
import { registerDbPlugin } from "./plugins/db.js";
import { registerErrorHandler } from "./plugins/error-handler.js";
import { registerAuthPlugin } from "./plugins/auth.js";
import { registerApiRoutes } from "./routes/index.js";
import { seedTrailsIfEmpty } from "./lib/seed-trails.js";

export async function buildApp() {
  const app = Fastify({ logger: true });

  await app.register(cors, {
    origin: ["http://localhost:4321", "http://localhost:4322"],
    credentials: true
  });

  registerErrorHandler(app);
  await registerDbPlugin(app);
  await registerAuthPlugin(app);
  await seedTrailsIfEmpty();

  await registerApiRoutes(app);

  return app;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT ?? 4000);
  const host = process.env.HOST ?? "0.0.0.0";

  buildApp()
    .then((app) => app.listen({ port, host }))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Failed to start API", error);
      process.exit(1);
    });
}
