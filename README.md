# DIO Wallet App (Frontend)

> **Work in Progress** este repositório contém apenas a parte frontend da aplicação; o backend ainda não está presente.

## Visão Geral

Este projeto é uma interface de carteira digital (wallet) construída com React + Vite. Ele fornece telas de autenticação, validação de formulários, modo escuro e chamadas para uma API externa (que deve existir em um backend separado).

### Estrutura atual do repositório

- `src/` código da aplicação React (frontend)
- `public/` assets públicos (imagens, ícones)
- Configuração de build com **Vite + Tailwind CSS + TypeScript**

> Não há pasta `backend/` neste repositório. Caso você queira adicionar o backend ao mesmo repositório, a recomendação é criar uma pasta `/backend` e manter o frontend em `/frontend`.

## Tecnologias Detectadas

### Frontend Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React Hook Form**
- **Zod**
- **React IMask**

### Infraestrutura / Desenvolvimento

- **ESLint**
- **Vite** (servidor de dev + build)

## Funcionalidades Implementadas (Frontend)

- Páginas de **login**, **cadastro** e **recuperação de senha**
- Validação de formulários com **Zod + React Hook Form**
- Máscaras para CPF / telefone
- Suporte a **modo escuro** através de hook/LocalStorage
- Componentes reutilizáveis (inputs, cards, footers, etc.)
- Configuração de chamadas API via `VITE_API_BASE_URL`

## Como Rodar (Frontend)

### Requisitos

- Node.js (>= 18)
- npm (ou yarn)

### Passos

```bash
# 1) Clone o repositório
git clone https://github.com/Vi-MaSSa/wallet-api.git
cd wallet-api

# 2) Instale as dependências
npm install

# 3) Configure variáveis de ambiente
# Exemplo de .env (crie este arquivo na raiz):
# VITE_API_BASE_URL=http://localhost:5000
# VITE_GOOGLE_CLIENT_ID=<seu-client-id>

# 4) Execute em modo de desenvolvimento
npm run dev
```

Em seguida, abra `http://localhost:5173` no navegador.

### Scripts disponíveis

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: preview da build de produção
- `npm run lint`: linting do código

## Estrutura de Pastas (Atual)

```
/ (root)
 public/               # assets estáticos
 src/                  # código do frontend
    assets/
    components/
    context/
    pages/
    schemas/
    services/
    utils/
    App.tsx
    main.tsx
    index.css
 package.json
 tsconfig.json
 vite.config.js
 tailwind.css
 eslint.config.js
```

## Desenvolvimento (Progressão)

Atualmente este repositório não possui commits (histórico Git vazio) e representa o scaffold inicial do frontend com as primeiras páginas e componentes criados.

## Organização Recomendada (Backend + Frontend)

Para manter separação clara entre frontend e backend, sugerimos a seguinte estrutura:

```
/backend
   src/
   package.json
   ...

/frontend
   src/
   package.json
   ...

README.md
```

## Comandos Git para Publicar (GitHub)

```bash
cd /c/Projects-DIO/dio-wallet-app

# Inicializa o repositório (se não estiver inicializado)
git init

# Adiciona todos os arquivos
git add .

# Cria o commit inicial
git commit -m "feat: scaffold inicial do frontend da DIO Wallet App"

# Adiciona o remoto (substitua com seu URL caso seja diferente)
git remote add origin https://github.com/Vi-MaSSa/wallet-api.git

# Envia para a branch principal (alterar caso seja master)
git push -u origin main
```

> Caso o Git esteja configurado em `master`, use `master` em vez de `main` no `git push`.

## Próximos Passos Planejados

- Adicionar o backend (API / banco de dados)
- Implementar endpoints de transação, saldo e histórico
- Criar dashboard com visualização de transações
- Adicionar autenticação real (tokens JWT)
- Configurar CI/CD para lint, build e deploy

---

# Se você quiser, posso ajudar a criar o esqueleto do backend (Node/Express + MongoDB) diretamente neste repositório, ou ajustar a estrutura para suportar o backend e o frontend juntos.
