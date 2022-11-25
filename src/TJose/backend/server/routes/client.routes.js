import { Router } from 'express';
import { compraClient, getProductsClients, getSelectedProductsClient, selectProductsClient } from '../controllers/client.controller.js';



const router = Router();


//Cliente
router.get('/client/products', getProductsClients);
router.put('/client/products/:id', selectProductsClient);
router.get('/client/carrito', getSelectedProductsClient);
router.put('/client/carrito', compraClient);

export default router