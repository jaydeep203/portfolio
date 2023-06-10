"use client";
import React,{useState, useEffect, useContext} from 'react';
import {Context} from "./ContextComp";
import Typography from "@mui/material/Typography";
import { MouseOutlined } from "@mui/icons-material";
import Image from "next/image";


import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";





export const ScrollBtn = () => {

  return <MouseOutlined />
 
}


export const TitleName = () => {

  return <>
    <Typography variant="h1">
      <p>J</p>
      <p>A</p>
      <p>Y</p>
      <p>D</p>
      <p>E</p>
      <p>E</p>
      <p>P</p>
    </Typography>
    <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">ENGINEER</Typography>
    </div>
  </>
}

 export const TimelineTitle = () => {
  const [timeLines, setTimeLines] = useState([1]);

//   const [timeLines, setTimeLines] = useState([]);
//   useEffect(()=>{
//     fetch("api/user")
//     .then((res)=>res.json())
//     .then((data) => {
//         if(data.success) setTimeLines(data.user.timeline);
//     });
// },[]);

  const {user} = useContext(Context);
  useEffect(()=>{
    setTimeLines(user.timeline);
  });
  


  return <>
    <Typography variant="h3">TIMELINE</Typography>
    <div>
      <Timeline position="alternate">
        {timeLines && timeLines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.data?item.date.toString().split("T")[0]:"date"}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">
                {item.title?item.title:"Title"}
                </Typography>
              <Typography>
              {item.description?item.description:"description"}
                </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div> 
  </>
 }

const HomeComp = () => {
  
  const {user} = useContext(Context);
  const imageUrl = user.skills;

  return (
  
      <>
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={imageUrl?imageUrl.image1.url:""} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={imageUrl?imageUrl.image2.url:""} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={imageUrl?imageUrl.image3.url:""} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={imageUrl?imageUrl.image4.url:""} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={imageUrl?imageUrl.image5.url:""} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={imageUrl?imageUrl.image6.url:""} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>
        
        <div className="skillIcons">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>

      </>
      
    
  )
}

export default HomeComp

