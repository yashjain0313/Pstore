// const express = require('expressi
import express from 'express';
import dotenv from 'dotenv'; 
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();
const app=express();

app.get("/",(req,res)=>{
    connectDB();
    res.send("Hello World");
});

app.post("/products", async (req,res)=>{
     const product = req.body;//user will send this data
     if(!product.name||!product.price||!product.image){
         return res.status(400).json({ success:false ,message:"All fields are required"});
     }  
     const newProduct = new Product(product);
   try{
await newProduct.save();
res.status(201).json({success:true,data:newProduct});
   }
   catch(error){
       console.error(`Error in Create Product: ${error.message}`);
      res.status(500).json({success:false,message:"Internal Server Error"});
   }
});

app.listen(5000,()=>{
    console.log("Server is running at http://localhost:5000");
});