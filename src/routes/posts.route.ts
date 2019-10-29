import express from 'express';

export const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {});
postsRouter.post('/', async (req, res) => {});

postsRouter.get('/:id', async (req, res) => {});
postsRouter.put('/:id', async (req, res) => {});
postsRouter.delete('/:id', async (req, res) => {});

postsRouter.get('/:id/comments', async (req, res) => {});
postsRouter.post('/:id/comments', async (req, res) => {});
