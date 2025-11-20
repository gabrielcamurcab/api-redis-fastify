import { FastifyReply, FastifyRequest } from "fastify";
import { GetNamesUseCase } from "../../../core/use-cases/get-names.usecase";

export class GetNamesController {
    constructor (private readonly useCase: GetNamesUseCase) {}

    async handle(
        request: FastifyRequest<{ Params: { id: string } }>, 
        reply: FastifyReply
    ) {
        const { id } = request.params;

        const names = await this.useCase.execute(id);

        return reply.status(200).send({
            names
        });
    }   
}