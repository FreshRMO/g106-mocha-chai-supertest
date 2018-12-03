process.env.NODE_ENV = 'test'

const request = require('supertest')
const { expect } = require('chai')
const app = require('../app')
const knex = require('../knex')

describe('Inside test database', () => {
  beforeEach('Migrate TEST database', done => {
    knex.schema.createTable('sloths', function(table) {
      table.increments()
      table.string('name')
    })
    .then(() => {
      done()
    })
  })

  afterEach('Drop TEST database', done => {
    knex.schema.dropTable('sloths').then(() => done())
  })
  
  describe('GET /sloths', () => {
    beforeEach(done => {
      Promise.all([
        knex('sloths').insert({id: 1, name: 'Dagny'})
      ])
      .then(() => done())
    })
  
    afterEach(done => { 
      knex('sloths')
        .del()
        .then(() => {
          done()
        })
    })
  
    it('responds with JSON', done => {
      request(app)
        .get('/sloths')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  
    it('returns an array of all sloth objects when responding with JSON', done => {
      request(app)
        .get('/sloths')
        .end((err, res) => {
          expect(res.body).to.deep.equal([{
            id: 1,
            name: 'Dagny'
          }])
          done()
        })
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
})
