// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            port: 5432,
            user: 'postgres',
            password: 'admin',
            database: 'library'
        },
        searchPath: ['knex', 'public'],
        migrations: {
            tableName: 'knex_migrations',
            directory: `${ __dirname }/db/migrations`
        },
        seeds: {
            directory: `${ __dirname }/db/seeds`
        }
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'library',
            user: 'postgres',
            password: 'admin'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'admin'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}