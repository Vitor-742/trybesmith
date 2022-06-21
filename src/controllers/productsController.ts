import express, { Request, Response } from 'express';
import productsService from '../services/productsService';

const userRouter = express.Router();

userRouter.get('/', async (_req: Request, res: Response) => {
  const allProducts = await productsService/* .getAll */();
  res.status(200).json(allProducts);
});

export default userRouter;