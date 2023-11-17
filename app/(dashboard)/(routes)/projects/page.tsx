"use client"

import { Heading } from "@/components/heading";
import { FolderKanban } from "lucide-react";
import { AiFillGithub } from "react-icons/ai"
import { GiAbstract047 } from "react-icons/gi"
import Link from "next/link"
import { useState } from 'react';
import { FcInfo } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";
const projects = [
  {
    poster: "/1.jpeg",
    name: "Expensify",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/3.jpeg",
    name: "Github Issue Tracker",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/2.jpeg",
    name: "CarbonFootprint Calculator",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/4.jpeg",
    name: "Vodeo",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/7.jpeg",
    name: "Chat Analyzer",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/6.jpeg",
    name: "Exo",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/13.jpeg",
    name: "Api",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/5.jpeg",
    name: "Chatify",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/14.jpeg",
    name: "Appraisal System",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/8.jpg",
    name: "Sine Graph",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/10.jpeg",
    name: "Auth Dashboard",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/16.jpeg",
    name: "Terminal Portfolio",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/9.jpeg",
    name: "Crud App",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/11.jpeg",
    name: "To-Do App",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/17.jpeg",
    name: "Text Summarizer",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/15.jpeg",
    name: "Insta",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },
  {
    poster: "/12.jpeg",
    name: "User Management",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "",
  },


]

const Projects = () => {
  const [modalStates, setModalStates] = useState(Array(projects.length).fill(false));

  const toggleModal = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
  };


  return (

    <>
      <style>{
        `
            .card2 {
                // width: 230px;
                border-radius: 20px;
                background: #1b233d;
                padding: 5px;
                overflow: hidden;
                // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
                // box-shadow: 0px 10px 20px rgba(0,0,0,0.1);

                transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              }
              
              .card2:hover {
                transform: scale(1.05);
              }
              
              .card2 .top-section {
                height: 150px;
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                position: relative;
              }
              
              .card2 .top-section img {
                width: 100%;
                height: 100%;
                object-fit: cover;
             
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
                border-bottom-left-radius: 15px;

              }
              
             
              
              
              .card2 .top-section .border {
                border-bottom-right-radius: 15px;
                height: 0px;
                width: 0px;
                background: white;
                background: #1b233d;
                position: relative;
                // transform: skew(-80deg);
                box-shadow: -10px -10px 0 0 #1b233d;
              }
              
              .card2 .top-section .border::before {
                content: "";
                position: absolute;
                width: 0px;
                height: 0px;
                top: -1px;
                right: -15px;
                background: rgba(255, 255, 255, 0);
                border-top-left-radius: 10px;
                box-shadow: -5px -5px 0 2px #1b233d;
              }
              
              .card2 .top-section::before {
                content: "";
                position: absolute;
                top: 30px;
                left: 0;
                background: rgba(255, 255, 255, 0);
                height: 0px;
                width: 0px;
                border-top-left-radius: 15px;
                box-shadow: -5px -5px 0 2px #1b233d;
              }
              
              .card2 .top-section .icons {
                position: absolute;
                top: 0;
                width: 100%;
                height: 30px;
                display: flex;
                justify-content: space-between;
              }
              
              .card2 .bottom-section {
                margin-top: 15px;
                padding: 10px 5px;
              }
              
              .card2 .bottom-section .title {
                display: block;
                font-size: 17px;
                font-weight: bolder;
                color: white;
                text-align: center;
                letter-spacing: 2px;
              }
              
              .card2 .bottom-section .row {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
              }
              
              .card2 .bottom-section .row .item {
                flex: 30%;
                text-align: center;
                padding: 5px;
                color: rgba(170, 222, 243, 0.721);
              }
              
              .card2 .bottom-section .row .item .big-text {
                font-size: 12px;
                display: block;
              }
              
              .card2 .bottom-section .row .item .regular-text {
                font-size: 9px;
              }
              
              .card2 .bottom-section .row .item:nth-child(2) {
                border-left: 1px solid rgba(255, 255, 255, 0.126);
                border-right: 1px solid rgba(255, 255, 255, 0.126);
              }
              .card2.first {
                margin-top: 16px; /* Adjust the margin as needed */
              }
              
              
            `
      }

      </style>
      <Heading
        title="Projects"
        description="Most advanced Projects ever made !"
        icon={FolderKanban}
        iconColor='text-emerald-500'
        bgColor="bg-emerald-500/10"


      />

      <div className="px-4 md:px-10 lg:px-16 xl:px-32 space-y-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto">

        {projects.map((projects, index) => (
          <div key={index} className={`card2 ${index === 0 ? 'first' : ''} `}>

            {/* <div className="top-section">
              <div className="border"></div>
            </div> */}
            <div className="top-section">
              <img src={projects.poster} alt={`Poster for ${projects.name}`} className="w-full h-auto" />
              {/* Icon for description */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => toggleModal(index)}
              >
                {/* You can replace the following with your own icon */}
                <FcInfo className="w-6 h-6 text-white" />
              </div>
              {/* <div className="border"></div> */}
            </div>
            <div className="bottom-section">
              <span className="title">{projects.name}</span>
              <div className="row row1">
                <div className="item flex flex-col items-center">
                  <Link href="https://github.com/dyanix">
                    <div>
                      {projects.githubIcon && (
                        <projects.githubIcon className="w-5 h-5 rounded-full text-grey-500 text-violet-400" />
                      )}
                    </div>
                  </Link>
                  <span className="regular-text">Github</span>
                </div>

                <div className="item">
                  <span className="big-text">100%</span>
                  <span className="regular-text">Free for use</span>
                </div>
                <div className="item flex flex-col items-center">
                  <div>
                    {projects.liveIcon && (
                      <projects.liveIcon className="w-5 h-5 rounded-full text-grey-500 text-violet-400" />
                    )}
                  </div>
                  <span className="regular-text">Live</span>
                </div>
              </div>
            </div>
            {/* Modal for project description */}
            {modalStates[index] && (
              <div className="  rounded-lg bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-black p-8 rounded-lg relative">
                  {/* Close icon at the top right */}
                  <div
                    className="absolute top-3 right-3 cursor-pointer text-white"
                    onClick={() => toggleModal(index)}
                  >
                    {/* Replace the following with your own close icon */}
                    <RxCrossCircled className="w-6 h-6" />
                  </div>

                  {/* Project description content */}
                  <p>{projects.name}</p>
                  <p className="text-white">{projects.description}</p>

                  {/* Close button */}

                </div>
              </div>
            )}

          </div>
        ))}

      </div>

    </>
  )
}

export default Projects;