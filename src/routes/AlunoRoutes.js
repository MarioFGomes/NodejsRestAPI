// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import TokenValidator from '../middlewares/TokenValidator';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', TokenValidator, alunoController.store);
router.get('/show', alunoController.show);
router.put('/', TokenValidator, alunoController.update);
router.delete('/', TokenValidator, alunoController.delete);

export default router;
