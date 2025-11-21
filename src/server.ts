import Fastify from "fastify";
import cors from "@fastify/cors";
import { sessionRoutes } from "./infra/http/routes/session.routes";

const app = Fastify();

app.register(cors, {
    origin: "*"
});

app.register(sessionRoutes);

const port = Number(process.env.PORT || 8080);

app.listen({ port }).then(() => {
    console.log("Servidor rodando");
});