import { Router } from 'express';
import googleAuth from './googleAuth';
import catRoute from './catRoute';

const router = Router();

router.use('/auth', googleAuth);
router.use('/cat', catRoute);

export default router;
