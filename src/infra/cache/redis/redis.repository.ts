import { CacheRepository } from "../../../application/ports/cache-repository";
import { RedisClient } from "./redis-client";

export class RedisRepository implements CacheRepository {
    constructor(private readonly redis: RedisClient) {}

    async get(key: string) {
        return await this.redis.raw.get(key);
    }

    async set(key: string, value: string): Promise<void> {
        await this.redis.raw.set(key, value);
    }
}