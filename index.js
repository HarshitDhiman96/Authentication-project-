require("dotenv").config();
const express=require("express");
const user=require('./models/user')
const db=require("./database/db");
const router = require("./routes/auth-routes");
const home=require('./routes/home-routes')
const adminroutes=require('./routes/admin-routes')
const uploadimageroutes=require('./routes/image-routes')


const app=express();



//connection with database
db.connection();


//middleware
app.use(express.json());

//routes
app.use("/api/auth",router); 
app.use("/api/home",home); 
app.use("/api/admin",adminroutes); 
app.use("/api/image",uploadimageroutes ); 


//server port and listening 
const port=process.env.port || 3000;
app.listen(port,()=>{
    console.log(`port is listening fully  at ${port}`);
});