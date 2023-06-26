import React from "react";
import HomeComp, { TimelineTitle, TitleName, ScrollBtn } from "../components/HomeComp";
import Link from "next/link";
import Image from "next/image";
import SelfContainer from "../components/SelfContainer";


// const FetchData = async() => {
//     try{
//       const url = `${process.env.URL}/api/user?cacheBuster=` + Date.now();
//       const res = await fetch(url);
//       const data = await res.json();
//       if(!data.success){
//         return data.message;
//       };
//       return data;
//     }
//     catch(err){
//       console.log(err);
//       return err
//     }
//   };
  


const Page = () => {

  // const data = await FetchData();

  return (
    <div className="home">

      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        {/* <img src={backGround} alt="backgroundImg" /> */}
        <TitleName/>
        <Link href={"/projects"}>VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn"><ScrollBtn /></div>

      <div className="homeSelfInfoContainer">
        <Image src="/background.png" alt="background" height={500} width={500} />
        <SelfContainer />
      </div>

      
        <div className="homeContainer">
          <TimelineTitle />
        </div>
      
      <div className="homeSkills">
        <HomeComp />
      </div>
     
    </div>
  );
};

export default Page;
