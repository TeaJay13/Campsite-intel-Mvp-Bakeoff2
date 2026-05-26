import fastifyCookie from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";

export async function registerAuthPlugin(app) {
  const accessSecret = process.env.JWT_ACCESS_SECRET;
  const refreshSecret = process.env.JWT_REFRESH_SECRET;

  if (!accessSecret || !refreshSecret) {
    throw new Error("JWT_ACCESS_SECRET and JWT_REFRESH_SECRET are required");
  }

  await app.register(fastifyCookie);

  await app.register(fastifyJwt, {
    secret: accessSecret,
    namespace: "access"
  });

  await app.register(fastifyJwt, {
    secret: refreshSecret,
    namespace: "refresh",
    cookie: {
      cookieName: "refreshToken",
      signed: false
    }
  });

  app.decorate("authenticate", async (request, reply) => {
    try {
      await request.accessJwtVerify();
    } catch {
      reply.code(401).send({
        error: "unauthorized",
        message: "Authentication required"
      });
    }
  });
}
