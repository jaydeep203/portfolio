"use client";
import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { toast } from 'react-hot-toast';

const ContactComp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactFormHandler = async(e) => {
        e.preventDefault();
        try{

          const res = await fetch("/api/auth/contact", {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              name, email, message
            })
          });

          const data = await res.json();
          if(!data.success) return toast.error(data.message);
          toast.success(data.message);

        }catch(error){
          return toast.error(error);
        }
        
    }


  return (
    <>
        <div className="contactRightBar"></div>
    
    <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" >
            Send
          </Button>
        </form>
      </div>
    </>
  )
}

export default ContactComp