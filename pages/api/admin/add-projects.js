import {asyncError, errorHandler} from "../../../middleware/error";
import {checkAuth, connectDB, cloudinaryConnect} from "../../../utils/features";
import {User} from "../../../models/User";
import cloudinary from "cloudinary";

const addProject = asyncError(async(req, res)=>{

    if(req.method!=="POST") return errorHandler(res, 400, "Only POST Method Allowed.");
    const {title, url, image, description, techStack} = req.body;
    
    if( !title || !url || !image || !description || !techStack)
    return errorHandler(res, 404, "Please Enter all Fields.");

    await connectDB();
    const user = await checkAuth(req);
    if(!user) return errorHandler(res, 400, "Login First.");
    cloudinaryConnect();
    const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder:"Portfolio"
    });
    
    user.projects.unshift({
        url,
        title,
        image:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url,
        },
        description,
        techStack,
    });

    await user.save();
    res.status(200).json({
        success:true,
        message:"Project Added Successfully."
    });

});

export default addProject;