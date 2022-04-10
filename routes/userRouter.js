import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/kakao', userController.signInKakao);
router.get('/naver', userController.signInNaver);

export default router;
