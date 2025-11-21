import { SessionPort } from "../../application/ports/session";
import { SessionNotFoundError } from "./errors/session-not-found.error";

export class DropSessionUseCase {
    constructor (private readonly sessions: SessionPort) {}

    async execute(sessionId: string) {
        const exists = await this.sessions.exists(sessionId);
        if (!exists) {
            throw new SessionNotFoundError();
        }

        await this.sessions.dropSession(sessionId);
    }
}