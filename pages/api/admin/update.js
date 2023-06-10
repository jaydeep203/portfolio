import { User } from "../../../models/User";
import { checkAuth, cloudinaryConnect, connectDB } from "../../../utils/features";
import { asyncError, errorHandler } from "../../../middleware/error";
import cloudinary from "cloudinary";

const updateUser = asyncError(async(req, res)=>{

    if(req.method!=="PUT") return errorHandler(res, 400, "Only PUT Method Allowed.");
    const {name, email, password, skills, about } = req.body;
    
    // if(!_id||!name||!email||password||skills||about)
    //     return errorHandler(res, 400, "User Fields are Empty.");
    
    await connectDB();
    // const user = await checkAuth(req);
    const user = await checkAuth(req);
    if(!user) return errorHandler(res, 400, "User Not Found.");

    if(name){
        user.name = name;
    }
    if(email){
        user.email = email;
    }
    if(password){
        user.password = password;
    }
    if(about){
        if(about.name){
            user.about.name = about.name;
        }
        if(about.title){
            user.about.title = about.title;
        }
        if(about.subtitle){
            user.about.subtitle = about.subtitle;
        }
        if(about.description){
            user.about.description = about.description;
        }
        if(about.quote){
            user.about.quote = about.quote;
        }
        if(about.avatar){
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
                folder:"Portfolio"
            });

            user.about.avatar = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
        }
    }

    if(skills){
        
        if(skills.image1){    
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
                folder:"Portfolio"
            })
            user.skills.image1 = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            };
        }
        if(skills.image2){
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
                folder:"Portfolio"
            })
            user.skills.image2 = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            };
        }
        if(skills.image3){
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
                folder:"Portfolio"
            })
            user.skills.image3 = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            };
        }
        if(skills.image4){
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
                folder:"Portfolio"
            })
            user.skills.image4 = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            };
        }
        if(skills.image5){
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
                folder:"Portfolio"
            })
            user.skills.image5 = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            };
        }
        if(skills.image6){
            cloudinaryConnect();
            await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
                folder:"Portfolio"
            })
            user.skills.image6 = {
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            };
        }
    }

    await user.save();

    res.status(200).json({
        success:true,
        message:"User Updated Successfully."
    });

});

export default updateUser;