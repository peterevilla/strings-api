
exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
       
      tbl.text("name", 256).notNullable();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();
      
    })
    .createTable("recipes", tbl => {

        tbl.increments();

        tbl.string("title", 256).notNullable();
        tbl.text("ingredients").notNullable();
        tbl.text("instructions").notNullable();
        tbl.string("category", 128).notNullable();
        tbl.string("source", 128).notNullable();
        tbl.text("img_url");
        tbl.boolean("private").notNullable().defaultTo(false);
        tbl.integer("user_id", 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('users');
};
