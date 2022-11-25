import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    image:{
        url: String,
        public_is: String,
    },
    stock:{
        type: Number,
        required: true,
        trim: true
    },
    selected:{
        type: Boolean,
        required: true,
        default: false
    }
})

export default mongoose.model('Producto', productSchema);