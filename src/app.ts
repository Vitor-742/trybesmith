import express from 'express';
import productsController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';

const app = express();

app.use(express.json());

// possivel colocar middleware de erro

app.use('/products', productsController);

app.use('/users', userController);

app.use('/orders', orderController);

export default app;
