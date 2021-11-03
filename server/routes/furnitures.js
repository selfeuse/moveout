import express from 'express';

import { getFurnitures, getFurnitureById, updateFurniture, createFurniture, deleteFurniture } from '../controller/furniture.js';

const router = express.Router();

router.get('/', getFurnitures);
router.get('/:id', getFurnitureById);
router.put('/', updateFurniture)
router.post('/', createFurniture);
router.delete('/:id', deleteFurniture)

export default router;