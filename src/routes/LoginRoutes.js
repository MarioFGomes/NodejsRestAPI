// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router = new Router();

router.post('/', LoginController.login);

export default router;
