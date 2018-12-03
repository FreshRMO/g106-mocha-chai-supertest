const express = require('express')
const router = express.Router()
const knex = require('../knex')

router.get('/', function(req, res, next) {
  return knex('sloths')
    .then(result => {
      res.send(result)
    })
})

module.exports = router
