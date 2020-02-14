import express from 'express';

import { CommentDTO, PostDTO } from '../models';

import { find, findByID, insert, update, remove } from '../data/db';
import { findPostComments, insertComment } from '../data/db';
import { validateComment, validatePost, validateID } from '../validate';

export const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
  try {
    const posts = await find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'The posts information could not be retrieved.' });
  }
});

postsRouter.post('/', async (req, res) => {
  try {
    if (!validatePost(req, res)) return;

    const post = await insert(req.body as PostDTO);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There was an error while saving the post to the database' });
  }
});

postsRouter.get('/:id', async (req, res) => {
  try {
    if (!(await validateID(req, res))) return;

    const post = await findByID(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'The post information could not be retrieved.' });
  }
});

postsRouter.put('/:id', async (req, res) => {
  try {
    if (!(await validateID(req, res))) return;
    if (!validatePost(req, res)) return;

    const post = await update(req.params.id, req.body);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'The post information could not be modified.' });
  }
});

postsRouter.delete('/:id', async (req, res) => {
  try {
    if (!(await validateID(req, res))) return;

    const post = await remove(req.params.id);
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'The post could not be removed' });
  }
});

postsRouter.get('/:id/comments', async (req, res) => {
  try {
    if (!(await validateID(req, res))) return;

    const comments = await findPostComments(req.params.id);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'The comments information could not be retrieved.' });
  }
});

postsRouter.post('/:id/comments', async (req, res) => {
  try {
    if (!(await validateID(req, res))) return;
    if (!validateComment(req, res)) return;

    const comment = await insertComment({ ...req.body, post_id: req.params.id } as CommentDTO);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'There was an error while saving the comment to the database' });
  }
});
