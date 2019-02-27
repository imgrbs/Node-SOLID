import express from 'express';
import ProductRoutes from './src/Product/ProductRoutes';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(new Date());
});

router.use('/products', ProductRoutes);

export default router;