const express=require('express')
const{register,login, changepassword}=require("../controllers/auth-controller")
const authmiddleware=require('../middleware/auth-middleware')


//created router 
const router=express.Router();



//all routes
router.post('/register',register)
router.post('/login',login)
router.post('/changeps',authmiddleware,changepassword)




module.exports=router
