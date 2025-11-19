const mongoose=require('mongoose');

const connection=async()=>{
    try{
       await mongoose.connect(process.env.mongooseurl);
        console.log("connection with database is successful");
    }catch(error){
        console.log("something is wrong here",error);
        process.exit(1);
    }
}
module.exports={connection}