import { asyncError, errorHandler } from "../../middleware/error";
import { User } from "../../models/User";
import { connectDB } from "../../utils/features";

const getUser = asyncError(async(req, res)=>{

    if(req.method!=="GET") return errorHandler(res, 400, "Only Get Method Allowed.");
    await connectDB();
    const user = await User.findOne().select("-email -password -_id");

    if(!user) return errorHandler(res, 400, "Nothing to Show You.");

    res.status(200).json({
        success:true,
        message:"User Fetched.",
        user
    })

});

export default getUser;