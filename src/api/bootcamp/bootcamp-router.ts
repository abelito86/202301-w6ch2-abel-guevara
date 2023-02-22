import express from 'express';
import {
  createThingController,
  getThingByIdController,
  getThingsController,
} from './bootcamp-controllers.js';

const router = express.Router();

router.route('/').get(getThingsController).post(createThingController);

router.route('/:id').get(getThingByIdController);

export default router;
