import { Router } from 'express';
import {getCatFromMongoDb, getCatByCategory} from '../Controller/CatController';

const router = Router();

router.get('/getCat',getCatFromMongoDb);
router.get('/getCatByCategory',getCatByCategory);

export default router;