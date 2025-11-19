# API Redis Fastify

API simples usando **Fastify**, **TypeScript**, **Redis (via Docker)** e uma organização limpa de pastas.

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

### POST /cache
Salva um valor no Redis.

```json
{
  "key": "user:1",
  "value": "Camurça",
}
```

### GET /cache/:key
Busca um valor salvo.