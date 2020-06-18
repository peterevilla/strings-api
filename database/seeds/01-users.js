const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('test123', 8);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:'user1', username: 'user1', password: hash},
        {name:'user2', username: 'user2', password: hash}
      ]);
    });
};
