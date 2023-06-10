"use client";

import React from 'react';
import { Typography } from "@mui/material";
import { BsGithub, BsLinkedin } from "react-icons/bs";
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
        <a href={"https://github.com/jaydeep203/"} target="blank">
          <BsLinkedin/>
        </a>
    </div>
    </>
  )
  
}

export default FooterComp