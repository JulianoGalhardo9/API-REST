import Knex, { type Knex as KnexType } from 'knex'
import { env } from './env/index.js'

export const config: KnexType.Config = {
    client: 'sqlite',
    connection: {
        filename: env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db',
    }
}

export const knex = Knex(config)
