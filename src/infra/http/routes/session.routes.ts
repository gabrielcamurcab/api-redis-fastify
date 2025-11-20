import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateSessionController } from "../controllers/create-session.controller";
import { addNameUseCase, createSessionUseCase, drawUseCase, getNamesUseCase } from "../../../container";
import { AddNameController } from "../controllers/add-name.controller";
import { DrawController } from "../controllers/draw.controller";
import { AddNameEntry } from "../dtos/add-name.request";
import { GetNamesController } from "../controllers/get-names.controller";

interface GetSessionRoute {
  id: string 
}

export async function sessionRoutes(app: FastifyInstance) {
    const createSession = new CreateSessionController(createSessionUseCase);
    const addName = new AddNameController(addNameUseCase);
    const draw = new DrawController(drawUseCase);
    const getNames = new GetNamesController(getNamesUseCase);

    app.post("/sessions", (request: FastifyRequest, reply: FastifyReply) => createSession.handle(request, reply));
    app.post("/sessions/:id/names", (request: FastifyRequest<{Params: GetSessionRoute, Body: AddNameEntry}>, reply: FastifyReply) => addName.handle(request, reply));
    app.get("/sessions/:id/names", (request: FastifyRequest<{ Params: GetSessionRoute }>, reply: FastifyReply) => getNames.handle(request, reply));
    app.post("/sessions/:id/draw", (request: FastifyRequest<{ Params: GetSessionRoute }>, reply: FastifyReply) => draw.handle(request, reply));
}