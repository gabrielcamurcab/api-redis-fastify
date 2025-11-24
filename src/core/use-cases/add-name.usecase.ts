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

        if (name.split(",").length > 1) {
            const names = name.split(",").map(n => n.trim());
            for (const n of names) {
                await this.names.addName(sessionId, n);
            }
            return;
        }

        await this.names.addName(sessionId, name);
    }
}