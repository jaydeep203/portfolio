import {asyncError, errorHandler} from "../../../middleware/error";
import {sendMail} from "../../../utils/sendMail";
const contactHandler = asyncError(async(req, res)=>{
    if(req.method!="POST")
    return errorHandler(res, 400, "Only POST Method is Allowed.");

    const {email, name, message} = req.body;
    if(!email||!name||!message)
    return errorHandler(res, 400, "Enter All Fields Correctly.");

    const userMsg = `Hi I am ${name}. My Email is ${email}. My Message is ${message}.`;
    await sendMail(userMsg);

    res.status(200).json({
        success:true,
        message:"Message Sent Successfully."
    });

});

export default contactHandler;