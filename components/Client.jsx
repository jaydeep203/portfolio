"use client";
import Link from 'next/link';
import React from 'react'
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../GlobalRedux/Features/dataSlice';

const Client = () => {
    // const dispatch = useDispatch();
    // console.log(data);
    // useEffect(()=>{
    //     dispatch(addUser(data.user));
    //     console.log( "UseEffect" ,data.user);
    // });

  return (
    <Link href={"/admin-panel"}>ADMIN PANEL</Link>
  )
};

export default Client

