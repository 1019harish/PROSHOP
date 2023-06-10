import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'



const router = express.Router()


// @desc     FETCH all products
//@route     GET /api/products
//@access    Public route

router.get('/', asyncHandler(async (req ,res) => {
    
    const products = await Product.find({})
    res.json(products)
}))


// @desc     FETCH single prodcut 
//@route     GET /api/products/:id
//@access    Public route

router.get(
    '/:id', 
    asyncHandler(async (req ,res) => {
       const productId = req.params.id
       console.log(` PRODUCT ID IS :${productId}`)
        try{
        
        const product =await Product.findById(productId)  
        console.log(product)
        if(product) {
            res.json(product);
        } 
        else{
            res.status(404)
            res.status(500).json({ message: 'Error fetching product', error: error.message });
            // throw new Error('Product not found')
        } 
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }
}))

export default router