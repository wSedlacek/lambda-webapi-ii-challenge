import knex from 'knex';
import { CommentDTO, PostDTO } from '../models';

import { development } from './knexConfig';
const db = knex(development);

export const find = async () => await db<PostDTO>('posts');

export const findById = async (id: string | number) =>
  await db<PostDTO>('posts')
    .where({ id })
    .first();

export const insert = async (post: PostDTO) => {
  const id = await db<PostDTO>('posts')
    .insert(post)
    .then((ids) => ids[0]);
  return await findById(id);
};

export const update = async (id: string | number, post: PostDTO) =>
  await db<PostDTO>('posts')
    .where('id', id)
    .update(post);

export const remove = async (id: string | number) =>
  await db<PostDTO>('posts')
    .where('id', id)
    .del();

export const findPostComments = async (postId: string | number) =>
  await db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('post_id', postId);

export const findCommentById = async (id: string | number) =>
  await db<CommentDTO>('comments')
    .join<PostDTO>('posts', 'posts.id', 'post_id')
    .select<CommentDTO>('comments.*', 'title as post')
    .where('comments.id', id);

export const insertComment = async (comment: CommentDTO) =>
  await db<CommentDTO>('comments')
    .insert(comment)
    .then((ids) => ({ id: ids[0] }));
