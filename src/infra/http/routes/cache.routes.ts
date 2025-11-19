import { FastifyInstance } from "fastify";
import { PostCacheDataController } from "../controllers/post-cache-data.controller";
import { GetCacheDataController } from "../controllers/get-cache-data.controller";

export async function cacheRoutes(app: FastifyInstance) {
    app.post("/cache", PostCacheDataController);
    
    app.get("/cache/:key", GetCacheDataController);
}