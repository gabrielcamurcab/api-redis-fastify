import Fastify from "fastify";
import Redis from "ioredis";
import { sessionRoutes } from "./infra/http/routes/session.routes";

const app = Fastify();

const redis = new Redis({
    host: "localhost",
    port: 6379
});

redis.on("connect", () => console.log("Redis conectado!"));
redis.on("error", (err) => console.error(err));

app.register(sessionRoutes);

app.listen({ port: 3000 }).then(() => {
    console.log("Servidor rodando");
});