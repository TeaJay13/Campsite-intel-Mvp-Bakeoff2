export function registerErrorHandler(app) {
  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    if (error.validation) {
      return reply.status(400).send({
        error: "validation_error",
        message: "Request validation failed",
        details: error.validation
      });
    }

    if (error.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
      return reply.status(error.statusCode).send({
        error: error.code ?? "request_error",
        message: error.message
      });
    }

    return reply.status(500).send({
      error: "internal_server_error",
      message: "An unexpected error occurred"
    });
  });
}
