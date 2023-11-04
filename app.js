// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import dotenv from 'dotenv';
import homerouter from './src/routes/HomeRoutes';
import userrouter from './src/routes/UserRoutes';
import loginrouter from './src/routes/LoginRoutes';
import alunorouter from './src/routes/AlunoRoutes';
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api', homerouter);
    this.app.use('/api/users/', userrouter);
    this.app.use('/api/login/', loginrouter);
    this.app.use('/api/aluno/', alunorouter);
  }
}

export default new App().app;
