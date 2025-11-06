import Knex, { type Knex as KnexType } from 'knex'

export const config: KnexType.Config = {
    client: 'sqlite',
    connection: {
        filename: './db/app.db',
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db',
    }
}

export const knex = Knex(config)
