import express from 'express';
import bootcampRouter from './bootcamp/bootcamp-router.js';

const router = express.Router();

router.use('/things', bootcampRouter);

export default router;
