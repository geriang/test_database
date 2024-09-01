const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('product/product')
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