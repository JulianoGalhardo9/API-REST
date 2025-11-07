import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { knex } from "../database.js";
import { randomUUID } from "crypto";

// Request Body: De onde vem as informações que servem para criar ou modificar um recurso

export async function transactionsRoutes(app: FastifyInstance) {

  app.get('/', async () => {
    const transactions = await knex ('transactions').select()

    return {
      transactions,
    }
  })

  // http://localhost:3333/transactions/O id do usuário

  app.get('/:id', async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(request.params)

    const transaction = await knex('transactions').where('id', id).first()

    return { transaction }
  })

  app.post("/", async (request, reply) => {

    const createTransactionBodySchema = z.object({
        title: z.string(),
        amount: z.number(),
        type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
        request.body,
    )

    await knex('transactions').insert({
        id: randomUUID(),
        title,
        amount: type === 'credit' ? amount : amount * -1,

    })

    // Query Builders

    //HTTP Codes

    return reply.status(201).send()
  });
}
