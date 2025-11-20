import { NamesPort } from "../../application/ports/names";

export class GetNamesUseCase {
    constructor (private readonly names: NamesPort) {}

    async execute(sessionId: string): Promise<string[]> {
        const names = await this.names.getNames(sessionId);

        return names;
    }
}