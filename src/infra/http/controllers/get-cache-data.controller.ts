import { FastifyReply, FastifyRequest } from "fastify";
import { GetCacheDataUseCase } from "../../../core/use-cases/get-cache-data.usecase";
import { NotFoundRedisKeyError } from "../../../core/use-cases/errors/not-found-redis-key.error";
import { RedisRepository } from "../../cache/redis/redis.repository";
import { RedisClient } from "../../cache/redis/redis-client";

interface GetParams {
    key: string
}

export async function GetCacheDataController (request: FastifyRequest<{ Params: GetParams }>, reply: FastifyReply) {
    const { key } = request.params;

    try {
        const redisClient = new RedisClient()
        const cacheRepository = new RedisRepository(redisClient)
        const getCacheDataUseCase = new GetCacheDataUseCase(cacheRepository);
        
        const value = await getCacheDataUseCase.execute(key);

        return reply.status(200).send({
            value: value
        });
    } catch (err) {
        if (err instanceof NotFoundRedisKeyError) {
            return reply.status(404).send({
                message: err.message
            });
        }
    }
    
}