export class NotFoundRedisKeyError extends Error {
    constructor() {
        super('Chave não encontrada');
    }
}