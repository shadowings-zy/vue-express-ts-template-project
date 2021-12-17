import express from 'express';
import { HomepageController } from './controller/homepageController';

export const getRouter = () => {
  const homepageController = new HomepageController();

  const router = express.Router();

  router.get('/', homepageController.helloWorld);
  router.get('/getHomepageData', homepageController.getHomepageData);

  return router;
};
