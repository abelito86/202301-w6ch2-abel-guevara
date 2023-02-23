import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import debugCreator from 'debug';
import apiRouter from './api/api-router.js';

const debug = debugCreator('server');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/api/v1', apiRouter);

app.listen(port, () => {
  debug(`Server started in port ${port}`);
});
