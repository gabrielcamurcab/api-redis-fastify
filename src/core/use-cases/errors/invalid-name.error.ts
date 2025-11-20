import createError from "@fastify/error";

export const InvalidNameError = createError(
  'INVALID_NAME',
  'Invalid name',
  400
);