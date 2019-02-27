import express from 'express';

import ProductController from './ProductController';
import ProductService from './ProductService';
import ProductRepository from './ProductRepository';

const router = express.Router();

global.productRepository = new ProductRepository();
global.productService = new ProductService(global.productRepository);

const productController = new ProductController();
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

export default router;