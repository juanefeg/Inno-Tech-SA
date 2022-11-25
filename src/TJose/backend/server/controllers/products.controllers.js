import Product from '../models/Product.js';

//Administrador
export const getProducts = async (req, resp) => {
    const productos = await Product.find()
    resp.send(productos);
};

export const addProducts = async (req, resp) => {
    const {name,description,price,image,stock}= req.body;
    const newProduct = new Product({name,description,price,image,stock});
    await newProduct.save();
    return resp.json(newProduct);
};

export const updateProducts = async (req, resp) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return resp.send(updatedProduct)
};
export const deleteProducts = async (req, resp) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)

    if (!deletedProduct){
        return resp.send('Not found')
    } else {
        resp.send("Borrando producto" )
    }
    
};

export const lookProduct = async (req, resp) => {
    const productById = await Product.findById(req.params.id)
    

    if(!productById){
        return resp.send('Producto no encontrado')
    }else{
        resp.json(productById)
    }
};

export const updateStock = async (req, resp) => {
    const productById = await Product.findById(req.params.id)
    const newStock = productById.stock + 1
    await Product.findByIdAndUpdate(req.params.id, {stock:newStock}, {new:true})
    console.log(productById.stock)
    
    resp.send(productById)
};