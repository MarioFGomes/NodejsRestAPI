// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import TokenValidator from '../middlewares/TokenValidator';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', TokenValidator, alunoController.store);
router.get('/show/:id', alunoController.show);
router.put('/:id', TokenValidator, alunoController.update);
router.delete('/:id', TokenValidator, alunoController.delete);

export default router;
