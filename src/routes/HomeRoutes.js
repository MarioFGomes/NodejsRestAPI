// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
