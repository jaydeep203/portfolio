"use client";
import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import { Context } from './ContextComp';
import {redirect} from "next/navigation";


const AboutComp = () => {

    const {user} = useContext(Context);
    if(!user.about) return redirect("/");
    const about = user.about;

  return (
    <>
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
    </>
  )
}

export default AboutComp