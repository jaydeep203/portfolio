"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { Home, InfoRounded, Menu, Close } from '@mui/icons-material';
import { AiOutlineProject } from 'react-icons/ai';
import {RiContactsLine} from "react-icons/ri";
import {FaTools} from "react-icons/fa";

const SmallScreenHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='smScreenHeader'>
          <Link href={"/"} ><Home /></Link>
          <Link href={"/about"} ><InfoRounded /></Link>
          <button onClick={()=> setIsOpen(!isOpen)}>{isOpen?<Close  />:<Menu />}</button>
      </div>
      {
        isOpen && <div className='MenuContent'>
          <Link href={"/projects"} ><AiOutlineProject/> PROJECTS</Link>
          <Link href={"/contact"} ><RiContactsLine/> CONTACT</Link>
          <Link href={"/admin-panel"}><FaTools /> ADMIN PANEL</Link>
        </div>
      }
      
    </>
  )
}

export default SmallScreenHeader