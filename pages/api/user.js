import { asyncError, errorHandler } from "../../middleware/error";
import { User } from "../../models/User";
import { checkAuth, connectDB } from "../../utils/features";

const getUser = asyncError(async(req, res)=>{

    if(req.method!=="GET") return errorHandler(res, 400, "Only Get Method Allowed.");
    await connectDB();
    let user = await checkAuth(req);
    if(!user)
        user = await User.findOne().select("-email -password -_id");

    if(!user) return errorHandler(res, 400, "Nothing to Show You.");
    let visitors= user.visitors;
    visitors++;
    user.visitors= visitors;
    await user.save();
    res.setHeader('Cache-Control', 'no-store');

    res.status(200).json({
        success:true,
        message:"User Fetched.",
        user,
    })

});

export default getUser;
