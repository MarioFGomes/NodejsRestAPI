// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import TokenValidator from '../middlewares/TokenValidator';
import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', TokenValidator, fotoController.store);

export default router;
