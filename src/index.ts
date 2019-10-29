import express from 'express';

import { postsRouter } from './routes/posts.route';

const server = express();
server.use(express.json());
server.use('/api/posts', postsRouter);

const port = 3000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
