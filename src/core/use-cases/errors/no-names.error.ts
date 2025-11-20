import createError from "@fastify/error";

export const NoNamesError = createError(
  'NO_NAMES',
  'No names to draw',
  404
);