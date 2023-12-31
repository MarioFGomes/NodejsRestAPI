// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import homerouter from './src/routes/HomeRoutes';
import userrouter from './src/routes/UserRoutes';
import loginrouter from './src/routes/LoginRoutes';
import alunorouter from './src/routes/AlunoRoutes';
import fotorouter from './src/routes/FotoRoutes';
import './src/database';

dotenv.config();

const whiteList=[
  'https://Appreact.litoteca.com',
  'http://localhost:3000'
]

const corsOption={
  origin:function(origin,callback){
    if(whiteList.indexOf(origin)!=-1 || !origin){
      callback(null,true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
  }
}

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors(corsOption));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'upload')));
  }

  routes() {
    this.app.use('/api', homerouter);
    this.app.use('/api/users/', userrouter);
    this.app.use('/api/login/', loginrouter);
    this.app.use('/api/aluno/', alunorouter);
    this.app.use('/api/foto/', fotorouter);
  }
}

export default new App().app;
