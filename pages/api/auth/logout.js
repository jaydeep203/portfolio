import { asyncError, errorHandler } from "../../../middleware/error";
import { cookieSetter } from "../../../utils/features";

const logout = asyncError((req, res)=>{
    if(req.method!=="GET")
    return errorHandler(res, 400, "Only GET Method is Allowed.");

    cookieSetter(res, null, false);

    res.status(200).json({
        success:true,
        message:"Logged Out Successfully."
    });
});

export default logout;