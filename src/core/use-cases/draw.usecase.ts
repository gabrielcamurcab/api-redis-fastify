import { DrawPort } from "../../application/ports/draw";
import { NamesPort } from "../../application/ports/names";
import { SessionPort } from "../../application/ports/session";

export class DrawUseCase {
    constructor(
        private readonly sessions: SessionPort,
        private readonly names: NamesPort,
        private readonly drawRepo: DrawPort
    ) {}

    async execute(sessionId: string): Promise<string> {
        const exists = await this.sessions.exists(sessionId);
        if (!exists) {
            throw new Error("Session not found");
        }

        const list = await this.names.getNames(sessionId);
        if (list.length === 0) {
            throw new Error("No names to draw");
        }

        const random = list[Math.floor(Math.random() * list.length)];

        await this.drawRepo.saveResult(sessionId, random);

        return random;
    }
}