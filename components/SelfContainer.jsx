"use client";

import React from 'react'
import { useContext } from 'react';
import {Context} from './ContextComp';
import { useState } from 'react';
import { useEffect } from 'react';

const SelfContainer = () => {
    const {user} = useContext(Context);
    const [selfInfo, setSelfInfo] = useState('');

    useEffect(()=>{
        setSelfInfo(user.self);
    })

  return (
    <div className="SelfText">
        <p>{selfInfo ? selfInfo : "Self Info"}</p>
    </div>
  )
}

export default SelfContainer