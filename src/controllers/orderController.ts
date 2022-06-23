import express, { Request, Response } from 'express';
import getAll from '../services/orderService';

const orderRouter = express.Router();

orderRouter.get('/', async (req: Request, res:Response) => {
  const allOrders = await getAll();
  return res.status(200).json(allOrders);
});

export default orderRouter;