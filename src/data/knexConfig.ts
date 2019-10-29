import { Config } from 'knex';

export const development: Config = {
  client: 'sqlite3',
  connection: { filename: './src/data/lambda.db' },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
  migrations: {
    directory: './src/data/migrations',
    tableName: 'dbmigrations',
  },
  seeds: { directory: './src/data/seeds' },
};
