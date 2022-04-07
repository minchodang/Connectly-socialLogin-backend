import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import routes from './routes';

const app = express();

//Middleware
app.use(cors);
app.use(express.json());
app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
};

start();

export default app;
