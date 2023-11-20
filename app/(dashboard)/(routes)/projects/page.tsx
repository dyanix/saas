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
    description: "I developed an expense tracker application using Material UI for the UI design, React JS for the  frontend, Speechly API for voice recognition, and ChartJS for data visualisation. The application  allows users to track their expenses and income by adding transactions through voice  commands, manual input, or file upload. The transactions are then displayed in a user-friendly  interface, with the option to view them in the form of various charts and graphs. I implemented  features such as real-time updates and offline support, and utilised Material UI's responsive layout  and design principles to create a visually appealing and functional application. Overall, the project  was a great opportunity to learn and apply modern web development technologies and  practices.",
  },
  {
    poster: "/3.jpeg",
    name: "Github Issue Tracker",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "GitHub issue tracker made with React and Octokit API is a web application that allows users to  track and manage issues on their GitHub repositories. Octokit API is used to access GitHub's API  and fetch data related to issues, such as title, description, labels, and status. React is used as the  front-end framework to create a user-friendly interface that enables users to create, view, and  manage issues easily.   Additionally, Chart.js is integrated into the application to provide visual representations of issue  data, such as the number of open issues, closed issues, and issues by label. This allows users to  quickly get a high-level overview of their repository's issue status and identify trends and patterns. Overall, this GitHub issue tracker is a powerful tool for managing issues on GitHub repositories,  providing a comprehensive and intuitive interface that streamlines issue tracking and  management.   ",
  },
  {
    poster: "/2.jpeg",
    name: "CarbonFootprint Calculator",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Carbon footprint is a very important means to understand the impact of a person's behaviour on  Global Warming. That's why someone who effectively wants to contribute to stop global warming,  even on an individual scale, needs to measure and keep track of their personal carbon footprint. Use our Carbon Footprint Calculator and offset your emissions today!! It is simple frontend website which calculates and for awareness",
  },
  {
    poster: "/4.jpeg",
    name: "Vodeo",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "I developed a video calling website using WebRTC API for real-time video and audio  communication, ReactJS for the frontend, and Material UI for the UI design. The website allows  users to make one-on-one or group video calls with the click of a button, and features a  responsive and intuitive interface designed with Material UI. I utilised ReactJS's functional  components and hooks to implement features such as call history and call notifications, and  integrated WebRTC's signalling server to establish secure peer-to-peer connections. Overall, the  project was a great opportunity to learn and apply modern web development technologies and  practices",
  },
  {
    poster: "/7.jpeg",
    name: "Chat Analyzer",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: " It is a web application built using Streamlit and Python that can be used to analyze  WhatsApp chat conversations. The app allows users to upload their WhatsApp chat text file and  provides various insights and statistics such as the number of messages sent by each participant,  the most frequently used words and emojis, and the busiest time of day for the conversation. The  app also generates word clouds and histograms to visualize the most commonly used words and  emojis in the chat. Overall, makes it easy for users to gain insights into their  WhatsApp conversations and understand the patterns and trends in their chat history. ",
  },
  {
    poster: "/6.jpeg",
    name: "Exo",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/13.jpeg",
    name: "Api",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "This Application Fetches the data from API and displays it.(React app)     ",
  },
  {
    poster: "/5.jpeg",
    name: "Chatify",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "I developed a chat application using React JS for the frontend,  ChatEngine API for real-time messaging functionality, and Firebase for the authentication backend  and database. The application allows users to communicate with each other in real-time, with the  ability to send messages, reactions, and files. I utilised React's functional components and hooks  to create a responsive and intuitive interface, and implemented features such as message  pagination and offline support. Overall, the project was a great opportunity to learn and apply  modern web development technologies and practices.",
  },
  {
    poster: "/14.jpeg",
    name: "Appraisal System",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/8.jpg",
    name: "Sine Graph",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/10.jpeg",
    name: "Auth Dashboard",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/16.jpeg",
    name: "Terminal Portfolio",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/9.jpeg",
    name: "Student Managment System",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Admin panel which add students and manage students    Demo:    Email:admin@gmail.com    Password:123456   ",
  },
  {
    poster: "/11.jpeg",
    name: "To-Do App",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/17.jpeg",
    name: "Text Summarizer",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/15.jpeg",
    name: "Insta",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
  },
  {
    poster: "/12.jpeg",
    name: "User Management",
    githubIcon: AiFillGithub,
    githubLink: "",
    liveIcon: GiAbstract047,
    liveLink: "",
    description: "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so y",
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
                margin-top: 16px;
              
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
                  <p className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text transition-all animate-gradientFlow">{projects.name}</p>
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