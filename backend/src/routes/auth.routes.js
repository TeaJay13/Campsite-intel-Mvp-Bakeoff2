import { registerUser, loginUser, getUserById } from "../services/auth.service.js";
import { registerBodySchema, loginBodySchema } from "../api/schemas/auth.schema.js";

const ACCESS_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "15m";
const REFRESH_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN ?? "7d";
const REFRESH_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

async function issueTokens(reply, userId, email) {
  const accessToken = await reply.accessJwtSign(
    { sub: userId, email },
    { expiresIn: ACCESS_EXPIRES_IN }
  );
  const refreshToken = await reply.refreshJwtSign(
    { sub: userId },
    { expiresIn: REFRESH_EXPIRES_IN }
  );
  return { accessToken, refreshToken };
}

export async function registerAuthRoutes(app) {
  app.post(
    "/register",
    { schema: { body: registerBodySchema } },
    async (request, reply) => {
      const user = await registerUser(request.body);
      const { accessToken, refreshToken } = await issueTokens(reply, user.id, user.email);

      reply.setCookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: REFRESH_MAX_AGE_SECONDS
      });

      return reply.code(201).send({ token: accessToken, user });
    }
  );

  app.post(
    "/login",
    { schema: { body: loginBodySchema } },
    async (request, reply) => {
      const user = await loginUser(request.body);
      const { accessToken, refreshToken } = await issueTokens(reply, user.id, user.email);

      reply.setCookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: REFRESH_MAX_AGE_SECONDS
      });

      return reply.send({ token: accessToken, user });
    }
  );

  app.post("/logout", async (request, reply) => {
    reply.clearCookie("refreshToken", { path: "/" });
    return reply.send({ ok: true });
  });

  app.get(
    "/me",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const { sub, email } = request.user;
      const user = await getUserById(sub);
      return reply.send({
        id: sub,
        email,
        displayName: user?.displayName ?? ""
      });
    }
  );
}
