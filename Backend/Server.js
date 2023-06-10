//const express = require('express');
//const dotenv = require('dotenv');
//const products = require('./Data/products');
//const cors = require('cors');
// import {notFound , errorHandler} from './middleware/errorMiddleware.js'
 import colors from 'colors'

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import ProductRoutes from './Routes/productRoutes.js'

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 8000

app.use(cors({
        origin:['http://localhost:3000/' , 'http://localhost:5000/']
}));

app.get('/', (req ,res) => {
        res.send('API is Running !!!.............erkgnvelvn')
})

app.use('/api/products', ProductRoutes);



app.listen(PORT , () => console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold));








