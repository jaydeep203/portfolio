"use client";
import React,{useContext, useState} from 'react';
import {Typography, Button} from "@mui/material";
import {AiOutlineProject} from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { Context } from './ContextComp';
import {redirect} from "next/navigation";
import { toast } from 'react-hot-toast';



export const ProjectCard = ({
    id, isAdmin, url, projectImage, projectTitle, description, technologies

}) => {
    
    const deleteHandler = async(id) => {
      try {
        const res = await fetch(`/api/admin/${id}`,{
          method:"DELETE"
        });
        const data = await res.json();
        if(!data.success) return toast.error(data.message);
        toast.success(data.message);

      } catch (error) {
        return toast.error(error);
      }
    }

    

    return <>
        <a href={url} className="projectCard" target="black">
            <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">Title {projectTitle}</Typography>
            </div>
            <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
            </div>
        </a>

        {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
}

const ProjectComp = () => {
  const {user} = useContext(Context);
  if(!user) return redirect("/");
  const projects = user.projects;
  if(!projects) return redirect("/");
  const [isAdmin, setAdmin] = useState(false);
  if(user._id)  setAdmin(true);

  return (
    <>
        <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            isAdmin={isAdmin}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </>
  )
}

export default ProjectComp