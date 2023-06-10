import React from 'react';
import Link from "next/link";

// const FetchData = async() => {
//   try{
//     const res = await fetch(`${process.env.URL}/api/user`);
//     const data = await res.json();
//     if(!data.success){
//       return data.message;
//     };
//     return data;
//   }
//   catch(err){
//     console.log(err);
//     return err
//   }
// };

const Header = () => {
  // const data = await FetchData();
    
  return (
    <div className="header">
      <div>
        <h1>PORTFOLIO</h1>
      </div>
      <article>
        <Link href={"/"} >HOME</Link>
        <Link href={"/about"} >ABOUT</Link>
        <Link href={"/projects"} >PROJECTS</Link>
        <Link href={"/contact"} >CONTACT</Link>
        <Link href={"/admin-panel"}>ADMIN PANEL</Link>
      </article>
    </div>
  )
}


export default Header