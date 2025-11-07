import "dotenv/config"
import Knex, { type Knex as KnexType } from 'knex'

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL env not found.')
}

export const config: KnexType.Config = {
    client: 'sqlite',
    connection: {
        filename: process.env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db',
    }
}

export const knex = Knex(config)
