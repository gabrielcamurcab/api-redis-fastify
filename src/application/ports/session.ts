export interface SessionPort {
    createSession(): Promise<string>
    exists(sessionId: string): Promise<boolean>
    dropSession(sessionId: string): Promise<void>
}