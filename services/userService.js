import userDao from '../models/userDao';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const { SECRET } = process.env;

const signInKakao = async accessToken => {
  // accessToken으로 kakao API에 접근하여 사용자 정보 취득
  const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });

  if (!user.data) {
    const err = new Error('INVALID_USER');
    err.statusCode = 400;

    throw err;
  }

  // 해당 사용자가 winterest 서버에 존재하는지 여부 확인
  const userCheck = await userDao.getUserBySNSId(user.data.id);

  // 등록되지 않은 사용자라면 winterest 서버에 등록
  if (!userCheck) {
    const createUser = await userDao.createUserBySNSId(
      user.data.id,
      user.data.properties.nickname,
    );

    const accessTokenWinterest = jwt.sign({ id: createUser.id }, SECRET, {
      expiresIn: '1h',
    });

    return accessTokenWinterest;
  }

  const accessTokenWinterest = jwt.sign({ id: userCheck.id }, SECRET, {
    expiresIn: '1h',
  });

  return accessTokenWinterest;
};

const signInNaver = async accessToken => {
  // accessToken으로 naver API에 접근하여 사용자 정보 취득
  const user = await axios.get('https://openapi.naver.com/v1/nid/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!user.data) {
    const err = new Error('INVALID_USER');
    err.statusCode = 400;

    throw err;
  }

  // 해당 사용자가 winterest 서버에 존재하는지 여부 확인
  const userCheck = await userDao.getUserBySNSId(user.data.response.id);

  // 등록되지 않은 사용자라면 winterest 서버에 등록
  if (!userCheck) {
    const createUser = await userDao.createUserBySNSId(
      user.data.response.id,
      user.data.response.name,
    );

    const accessTokenWinterest = jwt.sign({ id: createUser.id }, SECRET, {
      expiresIn: '1h',
    });

    return accessTokenWinterest;
  }

  const accessTokenWinterest = jwt.sign({ id: userCheck.id }, SECRET, {
    expiresIn: '1h',
  });

  return accessTokenWinterest;
};

export default {
  signInKakao,
  signInNaver,
};
