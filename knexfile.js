module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/slothsdb_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/slothsdb_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
