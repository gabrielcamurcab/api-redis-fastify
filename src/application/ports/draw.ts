export interface DrawPort {
    draw(sessionId: string): Promise<string>
    saveResult(sessionId: string, result: string): Promise<void>
    getResult(sessionId: string): Promise<string>
}