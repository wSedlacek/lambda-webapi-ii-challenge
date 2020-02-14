import express from 'express';

import { CommentDTO, PostDTO } from './models';
import { findByID } from './data/db';

export const validComment = (comment: CommentDTO) => !!comment.text;
export const validPost = (post: PostDTO) => !!post.title && !!post.contents;
export const validID = async (id: string | number) => !!(await findByID(id));

export const validateID = async (req: express.Request, res: express.Response) => {
  if (!(await validID(req.params.id))) {
    res.status(404).json({ message: 'The post with the specified ID does not exist.' });
    return false;
  }
  return true;
};

export const validateComment = (req: express.Request, res: express.Response) => {
  if (!validComment(req.body)) {
    res.status(400).json({ error: 'Please provide text for the comment.' });
    return false;
  }
  return true;
};

export const validatePost = (req: express.Request, res: express.Response) => {
  if (!validPost(req.body)) {
    res.status(400).json({ error: 'Please provide title and contents for the post.' });
    return false;
  }
  return true;
};
