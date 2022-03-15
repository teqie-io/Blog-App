import express from 'express';

import { getArticles, getArticleById, addArticle, removeArticle,updateArticle,changeStatusArticle, getMyArticles } from '../controllers/articles';
import AuthMiddleware from '../middleware/auth';

const router=express.Router();
const authMiddleware = new AuthMiddleware();

router.get('/',getArticles);
router.post('/myarticles',authMiddleware.verifyToken,getMyArticles);
router.get('/:id',getArticleById);
router.post('/',authMiddleware.verifyToken, addArticle);
router.patch('/remove/:id',authMiddleware.verifyToken, removeArticle);
router.patch('/changestatus/:id',authMiddleware.verifyToken, changeStatusArticle);
router.patch('/:id',authMiddleware.verifyToken, updateArticle);

export default router;