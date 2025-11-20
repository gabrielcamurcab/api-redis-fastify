export interface SessionPort {
    createSession(): Promise<string>
}