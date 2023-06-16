"use client";

import React from 'react';
import { Typography } from "@mui/material";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Link from 'next/link';


const FooterComp = () => {

  return(
     <>
    <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hey, My name is JAYDEEP. I am a full stack Web Developer and a App Developer. and
        <b> Aspiring Engineer.</b>
        </Typography>
        

        <Link href={"/contact"} className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href={"https://github.com/jaydeep203/"} target="blank">
          <BsGithub/>
        </a>
        <a href={"https://www.linkedin.com/in/jaydeep-deshpande-68601822a/"} target="blank">
          <BsLinkedin/>
        </a>
        <a href="mailto:jaydeepdeshpande03@outlook.com" target="blank">
          <AiFillMail/>
        </a>
    </div>
    </>
  )
  
}

export default FooterComp