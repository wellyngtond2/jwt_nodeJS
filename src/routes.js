import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
// eslint-disable-next-line import/no-named-as-default
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/create', SessionController.Create);

export default routes;
