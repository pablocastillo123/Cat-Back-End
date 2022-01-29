import { Router } from 'express';
import googleAuth from './googleAuth';

const router = Router();

router.use('/auth',googleAuth);

export default router;
