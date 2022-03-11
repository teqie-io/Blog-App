import express from "express";
import validateBody from "../middleware/validateBody";
import { signUp, signIn, verify, forgotPassword, confirmPassword } from "../controllers/auth";
const router = express.Router();

router.post('/signup', validateBody('signUp'), signUp)
router.post('/signin', validateBody('signIn'), signIn)
router.post('/verify', validateBody('verify'), verify)
router.post('/forgot-password', validateBody('forgotPassword'), forgotPassword)
router.post('/confirm-password', validateBody('confirmPassword'), confirmPassword)

export default router;