import { prisma } from '@prisma/client';
import userService from '../services/userService';

const signInKakao = async (req, res) => {
  try {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      return res.status(401).json({ message: 'INVALID_KAKAO_TOKEN' });
    }
    // accessToken이 있으면 winterest token 받아오기 진행
    const accessTokenWinterest = await userService.signInKakao(accessToken);

    return res
      .status(201)
      .json({ message: 'LOGIN_SUCCESS', accessToken: accessTokenWinterest });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const signInNaver = async (req, res) => {
  try {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      return res.status(401).json({ message: 'INVALID_Naver_TOKEN' });
    }
    // accessToken이 있으면 winterest token 받아오기 진행
    const accessTokenWinterest = await userService.signInNaver(accessToken);

    return res
      .status(201)
      .json({ message: 'LOGIN_SUCCESS', accessToken: accessTokenWinterest });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export default {
  signInKakao,
  signInNaver,
};
