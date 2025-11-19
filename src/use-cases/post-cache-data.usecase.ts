import Redis from "ioredis";
import { PostCacheEntry } from "../infra/http/dtos/post-cache.request";
import { CacheRepository } from "../application/ports/cache-repository";
const redis = new Redis();

export class PostCacheDataUseCase {
    constructor(private readonly cacheRepository: CacheRepository) {}

    async execute(body: PostCacheEntry) {
         await this.cacheRepository.set(body.key, body.value);
    }
}