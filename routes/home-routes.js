const express=require('express');
const router=express.Router();
const authmiddleware=require('../middleware/auth-middleware')

router.get("/welcome",authmiddleware,(req,res)=>{
    res.json({
        success:true,
        message:"home page hai ye user ke liye "
    })
})

module.exports=router