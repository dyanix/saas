"use client"

import { Heading } from "@/components/heading";
import { FolderKanban } from "lucide-react";


const projects = [
    {
        name: "Expense Tracker",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Github Issue Tracker",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "CarbonFootprint Calculator",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Vodeo",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Chat Analyzer",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Chat Analyzer",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Chat Analyzer",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Chat Analyzer",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },
    {
        name: "Chat Analyzer",
        githubIcon: "",
        githubLink: "",
        liveIcon: "",
        liveLink: ""
    },


]

const Projects = () => {
    return (

        <>
            <style>{
                `
            .card2 {
                width: 230px;
                border-radius: 20px;
                background: #1b233d;
                padding: 5px;
                overflow: hidden;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
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
                background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
                position: relative;
              }
              
              .card2 .top-section .border {
                border-bottom-right-radius: 15px;
                height: 30px;
                width: 130px;
                background: white;
                background: #1b233d;
                position: relative;
                transform: skew(-40deg);
                box-shadow: -10px -10px 0 0 #1b233d;
              }
              
              .card2 .top-section .border::before {
                content: "";
                position: absolute;
                width: 15px;
                height: 15px;
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
                height: 15px;
                width: 15px;
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
              
              .card2 .top-section .icons .logo {
                height: 100%;
                aspect-ratio: 1;
                padding: 7px 0 7px 15px;
              }
              
              .card2 .top-section .icons .logo .top-section {
                height: 100%;
              }
              
              .card2 .top-section .icons .social-media {
                height: 100%;
                padding: 8px 15px;
                display: flex;
                gap: 7px;
              }
              
              .card2 .top-section .icons .social-media .svg {
                height: 100%;
                fill: #1b233d;
              }
              
              .card2 .top-section .icons .social-media .svg:hover {
                fill: white;
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

            <div className=" px-4 md:px-20 lg:px-32 space-y-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center sm:mx-auto ">
                {projects.map((projects) => (
                    <div className="card2">
                        <div className="top-section">
                            <div className="border"></div>
                        </div>
                        <div className="bottom-section">
                            <span className="title">{projects.name}</span>
                            <div className="row row1">
                                <div className="item">
                                    <span className="big-text">2626</span>
                                    <span className="regular-text">Github</span>
                                </div>
                                <div className="item">
                                    <span className="big-text">100%</span>
                                    <span className="regular-text">Free for use</span>
                                </div>
                                <div className="item">
                                    <span className="big-text">38,631</span>
                                    <span className="regular-text">Live</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Projects;