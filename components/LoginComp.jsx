"use client";
import React, {useState, useContext} from 'react';
import { Typography, Button } from '@mui/material';
import {toast} from "react-hot-toast";
import { Context } from './ContextComp';
import { redirect } from 'next/navigation';

const LoginComp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(Context);
    const loading = false;


    const submitHandler = async(e) => {
        e.preventDefault();

        try{
            const res = await fetch("/api/auth/login", {
              method:"POST",
              body:JSON.stringify({
                email, password
              }),
              headers:{
                "Content-Type":"application/json",
              }
            });

            const data = await res.json();
            if(!data.success) return toast.error(data.message);
            setUser(data.user);
            toast.success(data.message);

        }catch(err){
          return toast.error(err);
        }
    }
    if(user._id) return redirect("/admin-panel");
  

  return (
    <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" disabled={loading}>
              Login
            </Button>
          </div>
        </form>
  )
}

export default LoginComp