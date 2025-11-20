import { AddNameUseCase } from "../core/use-cases/add-name.usecase";
import { CreateSessionUseCase } from "../core/use-cases/create-session.usecase";
import { DrawUseCase } from "../core/use-cases/draw.usecase";
import { RedisClient } from "../infra/cache/redis/redis-client";
import { RedisDrawRepository } from "../infra/cache/redis/redis-draw.repository";
import { RedisNamesRepository } from "../infra/cache/redis/redis-names.repository";
import { RedisSessionRepository } from "../infra/cache/redis/redis-session.repository";

// Clientes
export const redisClient = new RedisClient();

// Repositories / Adapters
export const sessionRepository = new RedisSessionRepository(redisClient);
export const namesRepository = new RedisNamesRepository(redisClient);
export const drawRepository = new RedisDrawRepository(redisClient);

// Use Cases
export const createSessionUseCase = new CreateSessionUseCase(
    sessionRepository
);

export const addNameUseCase = new AddNameUseCase(
    sessionRepository,
    namesRepository
);

export const drawUseCase = new DrawUseCase(
    sessionRepository,
    namesRepository,
    drawRepository
);