const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getUserRecipes,
};

function find() {
  return db("users").select("id", "name", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function getUserRecipes(id) {
    return db('recipes').where({user_id: id});
  }

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}