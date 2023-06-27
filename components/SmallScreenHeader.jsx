"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { Home, InfoRounded, Menu, Close } from '@mui/icons-material';

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
          <Link href={"/projects"} >PROJECTS</Link>
          <Link href={"/contact"} >CONTACT</Link>
          <Link href={"/admin-panel"}>ADMIN PANEL</Link>
        </div>
      }
      
    </>
  )
}

export default SmallScreenHeader