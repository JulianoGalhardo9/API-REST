# 🚀 API REST com Fastify, TypeScript, Knex e Testes Automatizados — Do Zero ao Deploy

---

## 🧭 Visão Geral

Este projeto é uma **API REST desenvolvida do zero**, utilizando:

- **Fastify**
- **TypeScript**
- **Knex**
- **SQLite**
- **Zod**
- **Cookies**
- **Vitest + Supertest**
- **tsup**

A aplicação evolui desde os fundamentos até tópicos avançados como:

- Arquitetura profissional
- Migrations
- Plugins e Hooks
- Validação com Zod
- Identificação via Cookies
- Testes unitários, integração e E2E
- Deploy para produção

---

## ⚙️ Etapas do Desenvolvimento

### 🔥 1. Fastify vs Express — Por que Fastify?
- Performance superior.
- Ecossistema de plugins.
- Melhor integração com TypeScript.

---

### 🎯 2. Introdução ao TypeScript
- O que é TS e por que usá-lo.
- Segurança e autocomplete.
- Build para JavaScript.

---

### 📦 3. Criação do Projeto
- Inicialização com **npm init**.
- Instalação dos pacotes essenciais.
- Estrutura inicial do servidor.

---

### 🗄️ 4. Formas de Trabalhar com Banco de Dados
- SQL puro.
- ORMs.
- Query Builder.
- Por que utilizamos **Knex** neste módulo.

---

### 🔧 5. Configurando o Knex
- Setup inicial.
- Primeira consulta para garantir funcionamento.

---

### 🧱 6. O que são Migrations?
- Como ajudam no desenvolvimento em equipe.
- Criação da primeira migration.

---

### 🧱 7. Migration da Tabela Transactions
- Implementação dos métodos **up** e **down**.
- Criação da tabela no banco.

---

### 📥 8. Queries Básicas no Knex
- Inserção.
- Busca.
- Fundamentos do Query Builder.

---

### 🔐 9. Variáveis de Ambiente (ENV)
- Para separar dev/produção.
- Configuração das variáveis no projeto.

---

### 🛡️ 10. Validação de ENV com Zod
- Uso do Zod para impedir execução com ENV inválida.
- Tipos seguros em tempo de execução.

---

### 📋 11. Requisitos Funcionais e Regras de Negócio
- Definição dos comportamentos esperados.
- Regras que garantem coerência da aplicação.

---

### 🔌 12. Plugins no Fastify
- Para adicionar funcionalidades.
- Criação de plugin de rotas.

---

### 🧩 13. Rotas de Transações + Validação com Zod
- Estruturação das rotas.
- Validação do **request.body**.
- Inserção no banco.

---

### 🔎 14. Autocomplete de Tabelas com TS + Knex
- Tipagem automática das tabelas.
- Sugestão de colunas via TypeScript.

---

### 📃 15. Listagem e Busca por ID
- Rota para listar todas as transações.
- Rota para buscar transação por ID.

---

### ➕ 16. Rota de Resumo (Sumário)
- Soma de todas as transações.
- Retorno do total para o cliente.

---

### 🍪 17. Cookies para Identificação de Usuário
- Escrita e leitura de cookies.
- Criação do `sessionId`.

---

### 🛑 18. PreHandler (Middleware) para Validar Cookie
- Middleware para validar `sessionId`.
- Proteção de rotas.

---

### 🪝 19. Hooks no Fastify
- Registro de hooks.
- Impacto nas rotas.

---

### 🧪 20. Introdução a Testes Automatizados
- Testes unitários.
- Testes de integração.
- Testes E2E.
- Pirâmide de testes.

---

### 🧪 21. Criando o Primeiro Arquivo de Testes (Vitest)
- Instalação.
- Primeiro teste automatizado.

---

### 🧪 22. Primeiro Teste E2E com Supertest
- Teste da rota de criação.
- Uso de `beforeAll`, `beforeEach`, `afterAll`, `afterEach`.

---

### 🧪 23. Organização com Describe
- Agrupamento de testes.
- Padrão “it should be able”.

---

### 🧪 24. Teste E2E da Listagem
- Recuperação de cookie de resposta.
- Validação com `expect.objectContaining`.

---

### 🧪 25. Lidando com Banco nos Testes
- Banco dedicado para testes.
- Reset usando migrations no `beforeEach`.

---

### 🧪 26. Finalização dos Testes
- Testes de todas as rotas.
- Cobertura completa.

---

### 🚀 27. Deploy da Aplicação
- O que é deploy.
- Preparação do build com **tsup**.
- Configurações para produção.

---

## 🧰 Tecnologias Utilizadas

- **Node.js**
- **Fastify**
- **TypeScript**
- **Knex.js**
- **SQLite**
- **Zod**
- **Cookies**
- **Vitest**
- **Supertest**
- **tsup**

---

## 🧠 Conceitos-Chave Aprendidos

- Arquitetura moderna de APIs.
- Tipagem forte com TS.
- Migrations e Query Builder.
- Validação de dados.
- Identificação do usuário via cookies.
- Uso de plugins, hooks e middlewares.
- Testes unitários, integração e E2E.
- Deploy profissional.

---

## 🏁 Conclusão

Este projeto fornece uma formação completa e prática para desenvolver APIs modernas, escaláveis e seguras com **Fastify + TypeScript**.  
Ele cobre desde a fundação da aplicação até testes e deploy
