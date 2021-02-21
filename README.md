# Demonstração - APIs REST com Express

Este repositório contém o código de exemplo utilizado na playlist de [API REST - Express vs. NextJS vs. NestJS](https://youtube.com/playlist?list=PLAUv7wjleCugZITBS9EudUpGNTMmH9oZy).

## Rodando o projeto
- Clonar o projeto
- Entrar na pasta do projeto pelo terminal
- Executar o comando npm install
- Executar o comando npm run dev

### URL base: http://localhost:3001/api
### Rotas disponíveis:
- GET
  - / -> retorna o objeto `{ status: 'success' }`
  - /users -> retorna uma lista de usuários
  - /users/:id -> retorna um usuário

- POST
  - /users -> teoricamente adiciona um usuário e retorna o objeto `{ status: 'created' }`
