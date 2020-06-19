// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/recipes.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
    pool:{
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
  },
},
  
  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/recipes.db3'
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

}
