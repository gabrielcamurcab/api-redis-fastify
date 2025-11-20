import { DrawPort } from "../../../application/ports/draw";
import { RedisClient } from "./redis-client";

export class RedisDrawRepository implements DrawPort {
    private readonly RESULT_TTL = 3600; // 1H
    
    constructor (private readonly redis: RedisClient) {}

    async saveResult(sessionId: string, result: string): Promise<void> {
        const key = `session:${sessionId}:result`;

        await this.redis.raw.set(key, result, 'EX', this.RESULT_TTL);
    }

    async getResult(sessionId: string): Promise<string | null> {
        const key = `session:${sessionId}:result`;
        const result = this.redis.raw.get(key);

        return await result;
    }
}