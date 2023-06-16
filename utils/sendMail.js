import {createTransport} from "nodemailer";

export const sendMail = async(text) => {
    try{

        const transporter = createTransport({
            host:process.env.SMPT_HOST,
            port:process.env.SMPT_PORT,
            auth:{
                user:process.env.SMPT_USER,
                pass:process.env.SMPT_PASSWORD,
            },
        });
        await transporter.sendMail({
            subject:"CONTACT REQUEST FROM PORTFOLIO.",
            to:process.env.MYMAIL,
            from:process.env.MYMAIL,
            text
        });

    }catch(error){
        console.log(error);
    }
}