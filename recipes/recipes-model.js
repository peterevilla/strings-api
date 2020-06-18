const db = require('../database/dbConfig');


module.exports = {

    find,
    add,
    findById,
    remove,
    update,
};


function find() {
    return db('recipes')
}
function findById(id) {

    return db('recipes').where({ id }).first();
  }

function add(recipe) {
  return db('recipes')
  .insert(recipe)
  .then(ids => {
    return findById(ids[0]);
  });

  }



function remove(id) {
 
     return db('recipes').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('recipes').where('id', Number(id)).update(changes)
}