import { NamesPort } from "../../application/ports/names";
import { SessionPort } from "../../application/ports/session";
import { InvalidNameError } from "./errors/invalid-name.error";
import { SessionNotFoundError } from "./errors/session-not-found.error";

export class AddNameUseCase {
    constructor(
        private readonly sessions: SessionPort,
        private readonly names: NamesPort
    ) {}

    async execute(sessionId: string, name: string) {
        const exists = await this.sessions.exists(sessionId);
        if (!exists) {
            throw new SessionNotFoundError();
        }

        if (!name || name.trim().length === 0) {
            throw new InvalidNameError();
        }

        await this.names.addName(sessionId, name);
    }
}