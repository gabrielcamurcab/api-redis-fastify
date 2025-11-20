import { FastifyReply, FastifyRequest } from "fastify";
import { DrawUseCase } from "../../../core/use-cases/draw.usecase";

export class DrawController {
    constructor (private readonly useCase: DrawUseCase) {}

    async handle(
        request: FastifyRequest<{ Params: { id: string } }>, 
        reply: FastifyReply
    ) {
        const { id } = request.params;

        const result = await this.useCase.execute(id);

        return reply.status(200).send({
            result
        });
    }   
}