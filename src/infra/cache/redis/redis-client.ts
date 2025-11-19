import Redis from "ioredis";

export class RedisClient {
  private client: Redis;

  constructor() {
    this.client = new Redis(process.env.REDIS_URL ?? "redis://localhost:6379");
  }

  get raw() {
    return this.client;
  }

  async disconnect() {
    await this.client.quit();
  }
}