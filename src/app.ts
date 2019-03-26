import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import logger from './util/logger';

// Carrega variáveis de ambiente de um arquivo .env, onde devem ser configurados senhas e chaves de APIs
dotenv.config({ path: '.env.example' });

import * as inicioController from './controllers/inicio';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', inicioController.index);

export default app;
