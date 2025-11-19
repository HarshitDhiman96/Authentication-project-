const cloudinary=require('cloudinary').v2
cloudinary.config({
    cloud_name:process.env.cloudname,
    api_key:process.env.apikey,
    api_secret:process.env.secretkey,
})
module.exports=cloudinary;