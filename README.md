# API de Jogadores de Futebol

Esta é uma API RESTful para gerenciamento de jogadores de futebol, construída com Node.js, Express e TypeScript. Os dados dos jogadores são armazenados em um arquivo JSON.

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd api-champions
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor:**
   ```bash
   npm start
   # ou, se usar ts-node
   npx ts-node src/serve.ts
   ```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints

Todos os endpoints estão sob o prefixo `/api/players`.

### Listar todos os jogadores
- **GET** `/api/players`
- **Resposta:**
```json
[
  {
    "id": "1",
    "name": "Cristiano Ronaldo",
    "age": 38,
    "position": "Atacante"
  },
  ...
]
```

### Buscar jogador por ID
- **GET** `/api/players/:id`
- **Resposta:**
```json
{
  "id": "1",
  "name": "Cristiano Ronaldo",
  "age": 38,
  "position": "Atacante"
}
```

### Adicionar novo jogador
- **POST** `/api/players`
- **Body:**
```json
{
  "name": "Novo Jogador",
  "age": 25,
  "position": "Meio-campista"
}
```
- **Resposta:**
```json
{
  "id": "<uuid>",
  "name": "Novo Jogador",
  "age": 25,
  "position": "Meio-campista"
}
```

### Atualizar jogador
- **PATCH** `/api/players/:id`
- **Body:**
```json
{
  "age": 26
}
```
- **Resposta:**
```json
{
  "id": "1",
  "name": "Cristiano Ronaldo",
  "age": 26,
  "position": "Atacante"
}
```

### Deletar jogador
- **DELETE** `/api/players/:id`
- **Resposta:**
  - 204 No Content

## Estrutura dos arquivos principais
- `src/serve.ts` — Inicializa o servidor
- `src/app.ts` — Cria o app Express e conecta as rotas
- `src/routes/routes.ts` — Define as rotas da API
- `src/controller/players-controllers.ts` — Lógica dos endpoints
- `src/services/players-service.ts` — Manipulação dos dados (JSON)
- `src/data/players.json` — Base de dados dos jogadores

---

### Feito com esforço 💻 by teuzowebdeveloper9 