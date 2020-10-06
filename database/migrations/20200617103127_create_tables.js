
exports.up = function(knex) {
    return knex.schema
    .createTable("categories", tbl => {
      tbl.increments();
       
      tbl.text("name", 256).notNullable().unique();
      
    })
    .createTable("instruments", tbl => {

        tbl.increments();

        tbl.string("name", 256).notNullable();
        tbl.text("description").notNullable();
        tbl.text("features").notNullable();
        tbl.string("make", 128).notNullable();
        tbl.integer("price", 128).notNullable();
        tbl.text("img_url");
        tbl.integer("category_id", 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instruments')
    .dropTableIfExists('categories');
};
