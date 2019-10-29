import express from 'express';

import { CommentDTO, PostDTO } from '../models';

import { find, findById, insert, update, remove } from '../data/db';
import { findPostComments, findCommentById, insertComment } from '../data/db';
import { validComment, validPost } from '../validate';

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
    if (!validPost(req.body)) {
      res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
      return;
    }

    const post = await insert(req.body as PostDTO);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There was an error while saving the post to the database' });
  }
});

postsRouter.get('/:id', async (req, res) => {});
postsRouter.put('/:id', async (req, res) => {});
postsRouter.delete('/:id', async (req, res) => {});

postsRouter.get('/:id/comments', async (req, res) => {});
postsRouter.post('/:id/comments', async (req, res) => {});
