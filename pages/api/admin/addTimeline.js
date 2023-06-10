import {asyncError, errorHandler} from "../../../middleware/error";
import {checkAuth, connectDB} from "../../../utils/features";
import { User } from "../../../models/User";

const addTimeline = asyncError(async(req, res)=>{
    if(req.method!="POST"){
        return errorHandler(res, 400, "Only Post Method is Allowed.");
    }
    const { title, description, date} = req.body;
    if(!title || !description || !date )
    return errorHandler(res, 400, "Enter All Fields.");

    // if(!_id) return errorHandler(res, 400, "Enter Id.");
    
    await connectDB();
    const user = await checkAuth(req);
    if(!user) return errorHandler(res, 400, "Login First."); 

    user.timeline.unshift({
        title,
        description,
        date
    });

    await user.save();

    res.status(200).json({
        success:true,
        message:"Timeline Added Successfully."
    });


});

export default addTimeline;