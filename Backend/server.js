// const express = require('expressi
import express from 'express';
import dotenv from 'dotenv'; 
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app=express();

app.use(express.json());//this will allow us to accept json data in the req.body
//middleware
const PORT = process.env.PORT || 5000;

app.use("/api/products",productRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
});