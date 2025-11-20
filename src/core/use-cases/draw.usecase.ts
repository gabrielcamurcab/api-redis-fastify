import { FastifyError } from "fastify";
import { DrawPort } from "../../application/ports/draw";
import { NamesPort } from "../../application/ports/names";
import { SessionPort } from "../../application/ports/session";
import createError from "@fastify/error";
import { SessionNotFoundError } from "./errors/session-not-found.error";
import { NoNamesError } from "./errors/no-names.error";

export class DrawUseCase {
    constructor(
        private readonly sessions: SessionPort,
        private readonly names: NamesPort,
        private readonly drawRepo: DrawPort
    ) {}

    async execute(sessionId: string): Promise<string> {
        const exists = await this.sessions.exists(sessionId);
        if (!exists) {
            throw new SessionNotFoundError();
        }

        const list = await this.names.getNames(sessionId);
        if (list.length === 0) {
            throw new NoNamesError();
        }

        const random = list[Math.floor(Math.random() * list.length)];

        await this.drawRepo.saveResult(sessionId, random);

        return random;
    }
}