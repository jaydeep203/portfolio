import {asyncError, errorHandler} from "../../../middleware/error";
import { User } from "../../../models/User";
import { checkAuth, connectDB } from "../../../utils/features";

const deleteItem = asyncError(async(req, res) => {
    if(req.method!=="DELETE")
    return errorHandler(res, 400, "Only DELETE method allowed.");

    await connectDB();
    const user = await checkAuth(req);
    if(!user) return errorHandler(res, 400, "Login First.");

    const itemId = req.query.id;
    
    user.timeline = user.timeline.filter((item)=>item._id!=itemId);

    await user.save();


    res.status(200).json({
        success:true,
        message:"Item Deleted Successfully."
    });

}); 

export default deleteItem;