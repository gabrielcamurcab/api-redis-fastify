import { randomUUID } from "crypto";
import { SessionPort } from "../../../application/ports/session";
import { RedisClient } from "./redis-client";

export class RedisSessionRepository implements SessionPort {
        private readonly SESSION_TTL = process.env.SESSION_TTL || 86400; // 24H

    constructor (private readonly redis: RedisClient) {}

    async createSession(): Promise<string> {
        const id = randomUUID();

        await this.redis.raw.set(
            `session:${id}`,
            JSON.stringify({ createdAt: Date.now() }),
            'EX',
            this.SESSION_TTL
        );

        return id;
    }

    async exists(sessionId: string): Promise<boolean> {
        const exists = await this.redis.raw.exists(`session:${sessionId}`);
        return exists === 1;
    }
}