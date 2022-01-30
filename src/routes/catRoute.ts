import { Router } from 'express';
import {getCatFromMongoDb} from '../Controller/CatController';

const router = Router();

router.get('/getCat',getCatFromMongoDb);

export default router;