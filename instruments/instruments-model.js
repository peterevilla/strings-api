const db = require('../database/dbConfig');


module.exports = {

    find,
    findById,
    remove,
    update,
};


function find() {
    return db('instruments')
}
function findById(id) {

    return db('instruments').where({ id }).first();
  }

function add(instrument) {
  return db('instruments')
  .insert(instrument)
  .then(ids => {
    return findById(ids[0]);
  });

  }



function remove(id) {
 
     return db('instruments').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('instruments').where('id', Number(id)).update(changes)
}