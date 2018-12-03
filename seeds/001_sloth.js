exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sloths').del()
    .then(function () {
      // Inserts seed entries
      return knex('sloths').insert([
        {id: 1, name: 'Dagny'},
        {id: 2, name: 'Ellis'},
        {id: 3, name: 'Wyatt'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('sloths_id_seq', (SELECT MAX(id) FROM sloths))")
      })
    })
}
