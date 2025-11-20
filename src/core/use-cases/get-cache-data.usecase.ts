import Redis from "ioredis";
import { NotFoundRedisKeyError } from "./errors/not-found-redis-key.error";
import { CacheRepository } from "../../application/ports/cache-repository";
const redis = new Redis();

export class GetCacheDataUseCase {
    constructor(private readonly cacheRepository: CacheRepository) {}

    async execute(key: string): Promise<string> {
        const data = await this.cacheRepository.get(key);

        if (!data) {
            throw new NotFoundRedisKeyError();
        }

        return data;
    }
}