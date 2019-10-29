import { Config } from 'knex';

export const development: Config = {
  client: 'sqlite3',
  connection: { filename: './data/lambda.db3' },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
  migrations: {
    directory: './data/migrations',
    tableName: 'dbmigrations',
  },
  seeds: { directory: './data/seeds' },
};
