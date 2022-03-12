import express from 'express';

import { getArticles, getArticleById, addArticle, removeArticle,updateArticle,changeStatusArticle } from '../controllers/articles';

const router=express.Router();

router.get('/',getArticles);
router.get('/:id',getArticleById);
router.post('/',addArticle);
router.delete('/:id',removeArticle);
router.patch('/changestatus/:id',changeStatusArticle);
router.patch('/:id',updateArticle);

export default router;