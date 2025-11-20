export interface NamesPort {
    addName(sessionId: string, name: string): Promise<void>
    getNames(sessionId: string): Promise<string[]>
}