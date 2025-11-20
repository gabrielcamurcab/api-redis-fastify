import { FastifyReply, FastifyRequest } from "fastify";
import { CreateSessionUseCase } from "../../../core/use-cases/create-session.usecase";

export class CreateSessionController {
    constructor (private readonly useCase: CreateSessionUseCase) {}

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const id = await this.useCase.execute();

        return reply.status(201).send({
            session_id: id
        });
    }
}