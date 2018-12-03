exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sloth').del()
    .then(function () {
      // Inserts seed entries
      return knex('sloth').insert([
        {id: 1, name: 'Dagny'},
        {id: 2, name: 'Ellis'},
        {id: 3, name: 'Wyatt'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('sloth_id_seq', (SELECT MAX(id) FROM sloth))")
      })
    })
}
