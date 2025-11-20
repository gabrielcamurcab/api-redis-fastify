# API Redis Fastify

API simples de sorteio usando **Fastify**, **TypeScript**, **Redis (via Docker)** e uma organização limpa de pastas.

A ideia aqui é treinar **caching através de Redis** e **clean arch** ao mesmo tempo. 

---

## 🚀 Tecnologias

- Fastify  
- TypeScript  
- ioredis  
- Redis (via Docker Compose)  
- tsup  

---

## 🐳 Rodar com Docker (Redis incluso)

O Redis só roda via Docker.

Subir apenas o banco:

```bash
docker compose up -d
```

A API roda localmente normalmente (npm run dev ou npm start), enquanto o Redis fica no container.

A interface RedisInsight estará em:

```
http://localhost:8001
```

---

## 🔧 Desenvolvimento

Instalar dependências:

```bash
npm install
```

Rodar em dev:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Produção:

```bash
npm start
```

---

A interface API estará em:

```
http://localhost:3000
```


## 🧪 Endpoints

### POST /sessions
Cria uma nova sessão


### POST /sessions/:id/names
```json
{
  "name": "Fulano"
}
```
Adiciona um novo nome para a lista de sorteio.

### POST /sessions/:id/draw
Realiza o sorteio.

## O que será implementado

### Requisitos funcionais

- [x] Endpoint de criação de sessão
- [x] Endpoint de adição de nomes para sorteio
- [x] Endpoint de sorteio

### Requisitos Não-funcionais

- [x] A sessão deve durar 24h
- [x] O tempo de armazenamento de conjunto de nomes para sorteio e nome sorteado deve ser de 1h

### Regras de Negócio

- [x] O sorteio deve ocorrer da forma mais aleatória possível