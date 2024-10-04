import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true
    }
},{
    timestamps: true
    // this will automatically create a timestamp for when the product was created
});

const Product = mongoose.model("Product", productSchema);
export default Product;