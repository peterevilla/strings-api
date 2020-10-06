const db = require('../database/dbConfig');


module.exports = {

    find,
    findById,
    remove,
    update,
};


function find() {
    return db('categories')
}
function findById(id) {

    return db('categories').where({ id }).first();
  }

function add(category) {
  return db('instruments')
  .insert(category)
  .then(ids => {
    return findById(ids[0]);
  });

  }



function remove(id) {
 
     return db('categories').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('categories').where('id', Number(id)).update(changes)
}