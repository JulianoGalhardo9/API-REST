import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions.js";

export const app = fastify();

app.register(cookie, {
  secret: "uma_chave_secreta_segura",
  hook: "onRequest",
});

app.register(transactionsRoutes, {
  prefix: "transactions",
});