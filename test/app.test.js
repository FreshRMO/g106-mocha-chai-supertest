process.env.NODE_ENV

const request = require('supertest')
const { expect } = require('chai')
const app = require('../app')
const knex = require('../knex')

describe('GET /sloths', () => {
  it('responds with JSON', done => {
    request(app)
      .get('/sloths')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

xdescribe('GET /sloths/:id', () => {

})

xdescribe('POST /sloths', () => {

})

xdescribe('PATCH /sloths', () => {

})

xdescribe('DELETE /sloths', () => {

})
