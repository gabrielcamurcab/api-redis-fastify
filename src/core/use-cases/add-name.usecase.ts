import { NamesPort } from "../../application/ports/names";
import { SessionPort } from "../../application/ports/session";

export class AddNameUseCase {
    constructor(
        private readonly sessions: SessionPort,
        private readonly names: NamesPort
    ) {}

    async execute(sessionId: string, name: string) {
        const exists = await this.sessions.exists(sessionId);
        if (!exists) {
            throw new Error("Session not found");
        }

        if (!name || name.trim().length === 0) {
            throw new Error("Invalid name");
        }

        await this.names.addName(sessionId, name);
    }
}