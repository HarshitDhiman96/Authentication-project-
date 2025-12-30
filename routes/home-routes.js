const express=require('express');
const router=express.Router();
const authmiddleware=require('../middleware/auth-middleware')

router.get("/welcome",authmiddleware,(req,res)=>{
    res.json({
        success:true,
        message:"this is home page for users "
    })
})

module.exports=router