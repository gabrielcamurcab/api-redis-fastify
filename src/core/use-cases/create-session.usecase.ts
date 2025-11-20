import { SessionPort } from "../../application/ports/session";

export class CreateSessionUseCase {
    constructor (private readonly sessions: SessionPort) {}

    async execute(): Promise<string> {
        const id = await this.sessions.createSession();
        return id;
    }
}