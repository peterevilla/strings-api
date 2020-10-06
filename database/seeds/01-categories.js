
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'guitar'},
        {id: 2, name: 'bass'},
        {id: 3, name: 'synth'}
      ]);
    });
};
