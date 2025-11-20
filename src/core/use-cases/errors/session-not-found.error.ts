import createError from "@fastify/error";

export const SessionNotFoundError = createError(
  'SESSION_NOT_FOUND',
  'Session not found',
  404
);