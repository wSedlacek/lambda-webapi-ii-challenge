import Knex from 'knex';

export const up = (knex: Knex) =>
  knex.schema.createTable('comments', (tbl) => {
    tbl.increments();
    tbl.string('text').notNullable();
    tbl.timestamps(true, true);

    tbl
      .integer('post_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('posts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });

export const down = (knex: Knex) => knex.schema.dropTableIfExists('comments');
