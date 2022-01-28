module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'barriga',
    },
    pool: {
      min: 0,
      max: 200,
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
