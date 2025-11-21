import { NamesPort } from "../../../application/ports/names";
import { RedisClient } from "./redis-client";

export class RedisNamesRepository implements NamesPort {
    private readonly NAMES_TTL = process.env.NAMES_TTL || 3600; // 1H

    constructor (private readonly redis: RedisClient) {}

    async addName(sessionId: string, name: string): Promise<void> {
        const key = `session:${sessionId}:names`;

        await this.redis.raw.sadd(key, name);
        await this.redis.raw.expire(key, this.NAMES_TTL);
    }

    async getNames(sessionId: string): Promise<string[]> {
        const key = `session:${sessionId}:names`;
        return await this.redis.raw.smembers(key);
    }
}