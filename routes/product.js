const express = require('express');
const router = express.Router();
const ProductService = require('../services/productService')
const productSvc = new ProductService()

router.get('/', async (req, res) => {
    try{
        const productRecords = await productSvc.displayAllProduct()
        res.render('product/product', {productRecords})

    }catch(error){
        console.log(error)
        res.status(500).send("Error Retriving Product Data")
    }
   
});

// router.get('/product', async (req, res) => {
//     try{
//         const usersRecords = await UserSvc.displayAllUsers()
//         console.log(usersRecords)
//         res.render('user/user', {usersRecords})
//     }catch(error){
//         console.log(error)
//         res.status(500).send("Error Retriving Users")
//     }
// });

module.exports = router