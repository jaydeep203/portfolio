"use client";
import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import { Context } from '../../components/ContextComp';
import {redirect} from "next/navigation";



const page = () => {

  // const user = await useSelector((state)=>state.userData.userData);
  // const about = user.about;

  const {user} = useContext(Context);
  if(!user.about) return redirect("/");
  const about = user.about;
  console.log("About - ", about);

  return (
    <div>
        <div className='about'>
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
            <img className='aboutAvatar' src="https://drive.google.com/uc?id=1RRUXndmMrDHVIG7krskP5UWJ8_x5eY-N" alt="profile" />
            <Typography variant='h4' style={{margin:"1vmax 0", color:"black"}}>Jaydeep</Typography>
            <Typography>{about.title}</Typography> 
            <Typography style={{margin:"1vmax 0"}}>{about.subtitle}</Typography>
        </div>
        <div>
            <Typography
                style={{
                    wordSpacing:"5px",
                    lineHeight:"50px",
                    letterSpacing:"5px",
                    textAlign:"right"
                }}
            >{about.description}</Typography>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'About',
  description: 'About for Portfolio App.'
}
