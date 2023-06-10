import mongoose from "mongoose";
import jwt  from "jsonwebtoken";
import {User} from "../models/User";
import {serialize} from "cookie";
import cloudinary from "cloudinary";

export const connectDB = async() => {
    const {connection} = await mongoose.connect(process.env.MONGODB_URI, {
        dbName:"portfolio"
    }); 

    console.log(`The Connection is Established with - ${connection.host}`);
};

export const cloudinaryConnect = () => {
    try{
        cloudinary.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

    }catch(err){
        console.log(err);
    }
}

export const cookieSetter = (res, token, set) => {
    res.setHeader("Set-Cookie", serialize("token", set?token:"", {
        path:"/",
        httpOnly:true,
        maxAge:set?15*24*60*60*1000:0,
    }))
};

export const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET);
};

export const checkAuth = async(req) => {
    const cookie = req.headers.cookie;
    if(!cookie) return null;

    const token = cookie.split("=")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  
    // console.log(decoded);

    return await User.findById(decoded._id);
}
