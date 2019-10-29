import Knex from 'knex';

export const up = (knex: Knex) =>
  knex.schema.createTable('posts', function(posts) {
    posts.increments();

    posts.string('title', 1024).notNullable();
    posts.text('contents').notNullable();

    posts.timestamps(true, true);
  });

export const down = (knex: Knex) => knex.schema.dropTableIfExists('posts');
