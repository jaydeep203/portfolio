import React from "react";
import HomeComp, { TimelineTitle, TitleName, ScrollBtn } from "../components/HomeComp";
import Link from "next/link";

// const FetchData = async() => {
//     try{
//       const user = await fetch(`${process.env.URL}/api/user`);
//       const data = await user.json();
//       if(!data.success){
//         return user.message;
//       };
//       return data;
//     }
//     catch(err){
//       console.log(err);
//       return err
//     }
// };

const Page = async() => {

  return (
    <div className="home">

      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        {/* <img src={backGround} alt="backgroundImg" /> */}
        <TitleName/>
        <Link href={"/projects"}>VIEW WORK</Link>
      </div>

      {/* <div className="homeScrollBtn"><ScrollBtn /></div> */}
      
      <div className="homeContainer">
        <TimelineTitle  />
      </div>
      <div className="homeSkills">
        <HomeComp />
      </div>
     
    </div>
  );
};

export default Page;
