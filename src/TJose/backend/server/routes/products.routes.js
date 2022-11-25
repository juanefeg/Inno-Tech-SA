import { Router } from 'express';
import { deleteProducts, addProducts, updateProducts, getProducts, lookProduct, updateStock } from '../controllers/products.controllers.js';


const router = Router();

//Administrador
router.get('/products', getProducts);
router.post('/products', addProducts);
router.put('/products/:id', updateProducts);
router.put('/products/stock/:id', updateStock);
router.delete('/products/:id', deleteProducts);
router.get('/products/:id', lookProduct);


export default router