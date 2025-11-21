import { FastifyReply, FastifyRequest } from "fastify";
import { DropSessionUseCase } from "../../../core/use-cases/drop-session.usecase";

export class DropSessionController {
    constructor (private readonly useCase: DropSessionUseCase) {}

    async handle(request: FastifyRequest<{ Params: { id: string }}>, reply: FastifyReply) {
        const { id } = request.params;
        await this.useCase.execute(id);

        return reply.status(200).send({
            message: "Session dropped sucessful"
        });
    }
}