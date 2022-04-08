import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getUserBySNSId = async snsId => {
  const [user] = await prisma.$queryRaw`
  SELECT
    user.id,
    sns_id
  FROM
    user
  WHERE
    sns_id=${snsId}`;

  return user;
};

const createUserBySNSId = async (snsId, nickName) => {
  await prisma.$queryRaw`
      INSERT INTO
        user (sns_id, name)
      VALUES
        (${snsId}, ${nickName})
      `;

  const [userId] = await prisma.$queryRaw`
  SELECT 
    user.id
  FROM
    user
  WHERE
    sns_id=${snsId}`;

  return userId;
};

export default {
  getUserBySNSId,
  createUserBySNSId,
};
