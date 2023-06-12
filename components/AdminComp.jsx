"use client";
import {Context} from './ContextComp';
import React, { useState, useContext } from 'react';
import {Typography, Button} from "@mui/material";
import { MdTimeline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import Link from 'next/link';
import { FaTrash } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import { ProjectCard } from './ProjectComp';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';
import {useRouter} from "next/navigation";


export const AdminProject = () => {

  const {user} = useContext(Context);
  if(!user._id) return redirect("/login");

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const router = useRouter();
  // const user = {projects:[1,2,3]};

  const submitHandler = async(e) => {
    e.preventDefault();
    try{

      const res = await fetch("/api/admin/add-projects", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title, url, image, description, techStack
        })
      });
      const data = await res.json();
      if(!data.success) return toast.error(data.message);
      toast.success(data.message);
      router.refresh();

    }catch(error){
      return toast.error(error);
    }

  }

  const handleImage =(e) => {
    const Reader = new FileReader();
    const file = e.target.files[0];

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if(Reader.readyState===2 ){
        setImage(Reader.result);
      }
    }
  }

  return <>
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

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Technologies"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
          />

          <Link href={"/admin-panel"}>
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.projects &&
            user.projects.map((item) => (
              <ProjectCard
                id={item}
                key={item}
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAdmin={true}
              />
            ))}
        </div>

  </>
}


export const AdminTimeline = () => {
  const {user} = useContext(Context);
  if(!user._id) return redirect("/login");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();
  // const user = {timeline:[1,2,3]};

  const submitHandler = async(e) => {
    e.preventDefault();
    try{

      const res = await fetch("/api/admin/addTimeline", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title,
          description,
          date
        })
      });
      const data = await res.json();
      if(!data.success) return toast.error(data.message);
      toast.success(data.message);
      router.refresh();


    }catch(error){
      return toast.error(error);
    }
  }

  const deleteHandler = async(id) => {
    try{

      const res = await fetch(`/api/admin/${id}`, {
        method:"DELETE"
      });
      const data = await res.json();
      if(!data.success) return toast.error(data.message);
      toast.success(data.message);

    }catch(error){
      return toast.error(error);
    }
    
  }

  return <>
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

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="adminPanelInputs"
          />

          <Link href={"/admin-panel"}>
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.timeline &&
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.date.toString().split("T")[0]}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
  </>
}



const AdminComp = () => {
   
    const {user, setUser} = useContext(Context);
    if(!user._id) return redirect("/login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setSkills] = useState({});
    const [about, setAbout] = useState({});


    const submitHandler = async(e) => {
      e.preventDefault();

      const router = useRouter();
      
      try {
        const res = await fetch("/api/admin/update", {
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name, email, password, about, skills
          })
        });
        const data = await res.json();
        if(!data.success) return toast.error(data.message);
        toast.success(data.message);
        router.refresh();
        
      } catch (error) {
        return toast.error(error);
      }

        
    }

    const handleImages = (e, val) => {

        const file = e.target.files[0];
        const Reader = new FileReader();

        Reader.readAsDataURL(file);

        Reader.onload = () => {
          if(Reader.readyState === 2){
            if(val === 1){
                setSkills({...skills,image1:Reader.result});
            }
            if(val === 2){
                setSkills({...skills,image2:Reader.result});
            }
            if(val === 3){
                setSkills({...skills,image3:Reader.result});
            }
            if(val === 4){
                setSkills({...skills,image4:Reader.result});
            }
            if(val === 5){
                setSkills({...skills,image5:Reader.result});
            }
            if(val === 6){
                setSkills({...skills,image6:Reader.result});
            }
          
          }
        }
        
 



    }

    const handleAboutImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
          if(Reader.readyState === 2){
            setAbout({...about, avatar:Reader.result});
          }
        }

        alert("Image About Updated.");
    }


    const logoutHandler = async() => {

      try {

        const res = await fetch("/api/auth/logout");
        const data = await res.json();
        if(!data.success) return toast.error(data.message);
        setUser({});
        toast.success(data.message);
        
      } catch (error) {
        return toast.error(error);
      }
      
        alert("Logout Successfully.");
        if(!user._id) return redirect("/login");

    }

  return (
    <>
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

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="adminPanelInputs"
          />

          <div className="adminPanelSkill">
            <div>
              <Typography>SKILL 1</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImages(e, 1)}
                accept="image/*"
              />
            </div>
            <div>
              <Typography>SKILL 2</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 2)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 3</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 3)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 4</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 4)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 5</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 5)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 6</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 6)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder="Name"
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Title"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Subtitle"
                value={about.subtitle}
                onChange={(e) =>
                  setAbout({ ...about, subtitle: e.target.value })
                }
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Description"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                className="adminPanelInputs"
              />

              <input
                type="file"
                onChange={handleAboutImage}
                className="adminPanelFileUpload"
                placeholder="Choose Avatar"
                accept="image/*"
              />
            </fieldset>
          </div>

          <Link href={"/admin-panel/timeline"}>
            TIMELINE <MdTimeline />
          </Link>
          <Link href={"/admin-panel/project"}>
            PROJECTS <AiOutlineProject />
          </Link>

          <Button type="submit" variant="contained">
            Update
          </Button>
        </form>

        <Button
          variant="contained"
          color="error"
          style={{ display: "block", margin: "4vmax auto" }}
          onClick={logoutHandler}
        >
          LOGOUT
        </Button>


    </>
  )
}

export default AdminComp