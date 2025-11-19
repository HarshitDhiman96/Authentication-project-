const mongoose=require('mongoose');
const newuserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user' 

    }
},{timestamps:true})
//creates the model named user  which allows crud operations having blueprint of newuserschema
module.exports=mongoose.model("user",newuserSchema)