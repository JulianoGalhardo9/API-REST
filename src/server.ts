import fastify from "fastify";
import cookie from "@fastify/cookie";

import { env } from "./env/index.js";
import { transactionsRoutes } from "./routes/transactions.js";

const app = fastify();

app.register(cookie, {
  secret: "uma_chave_secreta_segura",
  hook: "onRequest",
});
app.register(transactionsRoutes, {
  prefix: "transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server is Running!");
  });
