import crypto from 'node:crypto';
import { RequestHandler } from 'express';
import { Bootcamp, createThing, findAll, findById } from './bootcamp-model.js';

export const getThingsController: RequestHandler = (_req, res) => {
  res.json(findAll());
};

export const createThingController: RequestHandler = (req, res) => {
  const id = crypto.randomUUID();
  const thing: Bootcamp = {
    id,
    ...req.body,
  };
  createThing(thing);
  res.status(201).json(thing);
};

export const getThingByIdController: RequestHandler = (req, res) => {
  const { id } = req.params;
  const thing = findById(id);
  if (thing === undefined) {
    res.sendStatus(404);
  } else {
    res.json(thing);
  }
};
