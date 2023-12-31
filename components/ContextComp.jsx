"use client";
import { useState, createContext, useEffect } from "react";
import {Toaster} from "react-hot-toast";


export const Context = createContext({user:{}});
export const ContextProvider = ({children})=>{
    const [user, setUser] = useState({});

    useEffect(()=>{
        const url = "api/user?cacheBuster=" + Date.now();
        fetch(url)
        .then((res)=>res.json())
        .then((data) => {
            if(data.success) setUser(data.user);
        });
    },[]);
    

    return <Context.Provider value={{
        user, setUser
    }}>
        {children}
        <Toaster />
    </Context.Provider>

}