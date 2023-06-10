import { errorHandler, asyncError } from "../../../middleware/error";
import { User } from "../../../models/User";
import { connectDB, cookieSetter, generateToken } from "../../../utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async(req, res)=>{
    if(req.method!=="POST"){
        return errorHandler(res, 400, "Only Post Method Is Allowed.");
    }

    const {email, password} = req.body;
    if(!email||!password) return errorHandler(res, 400, "Enter All Details.");

    await connectDB();
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return errorHandler(res, 400, "Invalid Email Password.");
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched) return errorHandler(res, 400, "Invalid Email or Password.");

    const token = generateToken(user._id);
    cookieSetter(res, token, true);

    res.status(200).json({
        success:true,
        message:`Welcome Back ${user.name}`,
        user
    });

});

export default handler;
