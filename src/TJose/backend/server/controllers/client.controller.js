import Product from '../models/Product.js';

//Cliente
export const getProductsClients = async (req, resp) => {
    const productos = await Product.find({stock:{$gt: 0}})
    resp.send(productos);
};

export const selectProductsClient = async(req, resp) => {
    await Product.findByIdAndUpdate(req.params.id, {selected:true}, {new:true})
    resp.send("Producto seleccionado")
};

export const getSelectedProductsClient = async (req, resp) => {
    const productos = await Product.find({selected:true})
    var total = 0
    for (const prod in productos){
        total = total + productos[prod].price 
    }
    console.log(total)
    resp.send(productos);
};

export const compraClient = async (rer, resp) => {
    const productos = await Product.find({selected:true})
    for (const prod in productos){
        const substock = productos[prod].stock -1
        await Product.findByIdAndUpdate(productos[prod].id, {stock: substock, selected: false}, {new:true})
    }
    resp.send("Gracias por su compra")
}