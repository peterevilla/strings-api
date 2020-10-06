const pgConnection = process.env.DATABASE_URL;
require('dotenv').config();
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/instruments.db3'
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
  client: 'pg',
  connection: pgConnection,
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}
}
