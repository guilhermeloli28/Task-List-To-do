module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '123',
            database: 'todoapp'
        },
        migrations: {
            directory: 'src/migrations'
        }
    }
  }