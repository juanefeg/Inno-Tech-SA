import express from 'express';
import productRoutes from './routes/products.routes.js';
import clientRoutes from './routes/client.routes.js';

const app = express();


//middleware
app.use(express.json());

//routes
app.use(productRoutes, clientRoutes);


export default app;