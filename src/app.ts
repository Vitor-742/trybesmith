import express/* , { Request, Response } */ from 'express';// ficar ligado com type de status
import productsController from './controllers/productsController';

const app = express();

app.use(express.json());

// possivel colocar middleware de erro

app.use('/products', productsController);

export default app;
