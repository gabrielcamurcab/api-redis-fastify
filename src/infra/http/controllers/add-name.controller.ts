import { FastifyReply, FastifyRequest } from "fastify";
import { AddNameUseCase } from "../../../core/use-cases/add-name.usecase";
import { AddNameEntry } from "../dtos/add-name.request";

export class AddNameController {
    constructor (private readonly useCase: AddNameUseCase) {}

    async handle(
        request: FastifyRequest<{ Params: { id: string }; Body: AddNameEntry }>,
        reply: FastifyReply
    ) {
        const { id } = request.params;
        const { name } = request.body;

        await this.useCase.execute(id, name);

        return reply.status(200).send({
            message: "Name added succesfully"
        });
    }
}