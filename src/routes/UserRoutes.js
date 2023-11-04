// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import userController from '../controllers/UserController';
import TokenValidator from '../middlewares/TokenValidator';

const router = new Router();

router.post('/', TokenValidator, userController.store);
router.get('/', TokenValidator, userController.index);
router.get('/show', TokenValidator, userController.show);
router.put('/', TokenValidator, userController.update);
router.delete('/', TokenValidator, userController.delete);

export default router;
