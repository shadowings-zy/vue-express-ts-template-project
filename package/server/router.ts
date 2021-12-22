import express from 'express';
import { UserController } from './controller/userController';

export const getRouter = () => {
  const userController = new UserController();
  const router = express.Router();
  router.get('/user', userController.getUser);
  return router;
};
