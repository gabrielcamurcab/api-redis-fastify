export interface SessionPort {
    createSession(): Promise<string>
    exists(sessionId: string): Promise<boolean>
}