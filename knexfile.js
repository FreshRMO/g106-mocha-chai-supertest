module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/slothsdb'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/slothsdb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
