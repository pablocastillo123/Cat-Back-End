import { Router } from 'express';
import authRoute from './authRoute';
import catRoute from './catRoute';

const router = Router();

router.use('/auth', authRoute);
router.use('/cat', catRoute);

export default router;
