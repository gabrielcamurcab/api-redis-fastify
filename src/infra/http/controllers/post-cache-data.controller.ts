import { FastifyReply, FastifyRequest } from "fastify";
import Redis from "ioredis";
import { PostCacheDataUseCase } from "../../../core/use-cases/post-cache-data.usecase";
import { PostCacheEntry } from "../dtos/post-cache.request";
import { RedisClient } from "../../cache/redis/redis-client";
import { RedisRepository } from "../../cache/redis/redis.repository";
const redis = new Redis();

export async function PostCacheDataController (request: FastifyRequest, reply: FastifyReply) {
    const body = await request.body as PostCacheEntry;
    
    const redisClient = new RedisClient();
    const cacheRepository = new RedisRepository(redisClient)
    const postCachDataUseCase = new PostCacheDataUseCase(cacheRepository);
    await postCachDataUseCase.execute(body);
    
    return reply.status(201).send({ message: 'Chave criada com sucesso!' });
}