import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database.js";
import { randomUUID } from "crypto";

// Request Body: De onde vem as informações que servem para criar ou modificar um recurso

// Cookies -> Formas de manter contexto entre requisições (Salva seu id para conseguir validar se a mesma pessoa fez tais requisições) = meio que já salvar o usuário

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const transactions = await knex("transactions").select();

    return {
      transactions,
    };
  });

  // http://localhost:3333/transactions/O id do usuário

  app.get("/:id", async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.uuid(),
    });

    const { id } = getTransactionParamsSchema.parse(request.params);

    const transaction = await knex("transactions").where("id", id).first();

    return { transaction };
  });

  app.get("/summary", async () => {
    const summary = await knex("transactions")
      .sum("amount", { as: "amount" })
      .first();

    return { summary };
  });

  app.post("/", async (request, reply) => {
    console.log("🚀 Entrou na rota POST /transactions");

    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body
    );

    let sessionId = request.cookies.sessionId;
    console.log('Cookies recebidos:', request.cookies)

    if (!sessionId) {
      sessionId = randomUUID();
      console.log('Criando novo cookie com sessionId:', sessionId)

      reply.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    await knex("transactions").insert({
      id: randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });
}
