const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwttoken=require('jsonwebtoken');
const { find } = require("../models/image");
//register user

const register = async (req, res) => {
  try {
    // console.log("➡️ req.body:", req.body);
    const { name, email, password, role } = req.body;
//or kya karta hai agar name dbs mai hai toh if chalega aur email exists karta hai toh if chalega aur agar dono mai se koi nahi karta toh else chalega 
    const checkuniquness = await user.findOne({ $or: [{ name }, { email }] });
    if (checkuniquness) {
      return res.status(400).json({
        success: false,
        message: "Name or Email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpsswd = await bcrypt.hash(password, salt);

    const newuser = new user({ name, email, password: hashedpsswd, role });
    await newuser.save();

    res.status(200).json({ success: true, message: "User registered successfully!" });
  } catch (e) {
    console.error("🔥 Error in register controller:", e);
    res.status(500).json({ success: false, message: e.message });
  }
};
//login user
const login = async (req, res) => {
  try {
    // console.log(req.body);
    const{name,password}=req.body;
    const loginuser=await user.findOne({name});
    if(!loginuser){
      return res.status(400).json({
        status:false,
        message:"please register yourself first then try to login in our database"
      })
    }
    else{
      const ispassmatch=await bcrypt.compare(password,loginuser.password);
      if(!ispassmatch){
        return res.status(400).json({
          status:false,
          message:"Invalid password or username"
        });
      }
      //creating jwt token for 30 minutes 
      const accesstoken=jwttoken.sign({
        userid:loginuser._id,
        username:loginuser.name,
        role:loginuser.role
      },process.env.jwtkey,{
        expiresIn:"30m"
      })
      res.status(200).json({
        success:true,
        message:"login successfully now u have 30 minutes enjoy",
        accesstoken
      })
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error is here please resolve that error by yourself",
    });
  }
};

const changepassword=async(req,res)=>{
  try{
    const {name,newpassword,oldpassword}=req.body;
    //finds user with that name
    const finduser=await user.findOne({name})
    if(!finduser){
      res.status(401).json({
        success:false,
        message:"name didn't match in dbs"
      })
    }
    else{
      //checks if old psswd is same as new one 
      const checkps= await bcrypt.compare(newpassword,finduser.password)
      if(checkps){
        res.status(401).json({
          message:"old and new password can't be same "
        })
      }
      else{
        const salt = await bcrypt.genSalt(10);
    const hashednewpsswd = await bcrypt.hash(newpassword, salt);
    finduser.password=hashednewpsswd;
    await finduser.save();
    res.status(200).json({
      messgae:"password changed successfully",
      password:hashednewpsswd
    })
      }
    }

  }catch(e){
    console.error("error while changing password try again later ",e);
  }
}

module.exports = { register, login ,changepassword };
