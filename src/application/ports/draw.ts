export interface DrawPort {
    saveResult(sessionId: string, result: string): Promise<void>
    getResult(sessionId: string): Promise<string | null>
}