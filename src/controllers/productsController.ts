import express, { Request, Response, NextFunction } from 'express';
import { getAll, createProduct } from '../services/productsService';

const userRouter = express.Router();

userRouter.get('/', async (_req: Request, res: Response) => {
  const allProducts = await getAll();
  res.status(200).json(allProducts);
});

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (name.length < 3) {
    return res.status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  if (typeof amount !== 'string') {
    return res
      .status(422).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res
      .status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};

userRouter.post('/', validateName, validateAmount, async (req: Request, res: Response) => {
//   const { name, amount } = req.body;
//   if (!name) return res.status(400).json({ message: '"name" is required' });
//   if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
//   if (name.length < 3) {
//     return res.status(422)
//       .json({ message: '"name" length must be at least 3 characters long' });
//   }
//   if (!amount) return res.status(400).json({ message: '"amount" is required' });
//   if (typeof amount !== 'string') return res.status(422).json({ message: '"amount" must be a string' });
//   if (amount.length < 3) return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  const { insertId } = await createProduct(req.body);
  return res.status(201).json({ ...req.body, id: insertId });
});

export default userRouter;