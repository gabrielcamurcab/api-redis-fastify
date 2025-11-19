import Fastify from "fastify";
import Redis from "ioredis";
import { cacheRoutes } from "./infra/http/routes/cache.routes";

const app = Fastify();

const redis = new Redis({
    host: "localhost",
    port: 6379
});

redis.on("connect", () => console.log("Redis conectado!"));
redis.on("error", (err) => console.error(err));

app.register(cacheRoutes);

app.listen({ port: 3000 }).then(() => {
    console.log("Servidor rodando");
});