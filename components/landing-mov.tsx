// const Mov=()=>{
//     return(
//        <div>
        
//        </div>
//     )
// }

// export default Mov;

import React from 'react';

const HighlightsData = [
  {
    name: 'GitHub Campus Expert',
    link: 'https://education.github.com/experts',
    bgColor: '#fff',
  },
  {
    name: 'Postman Students Expert',
    link: 'https://www.postman.com/student-program/student-expert/',
    bgColor: '#fff',
  },
  {
    name: 'Google Kickstart',
    link: 'https://codingcompetitions.withgoogle.com/',
    bgColor: '#fff',
  },
  {
    name: 'Amazon WoW',
    link: 'https://amazonwowindia.splashthat.com/',
    bgColor: '#fff',
  },
  {
    name: 'JP Morgan - Code for Good',
    link: 'https://careers.jpmorgan.com/in/en/students',
    bgColor: '#fff',
  },
  {
    name: 'Microsoft Engage',
    link: 'https://acehacker.com/microsoft/engage2022/',
    bgColor: '#fff',
  },
  {
    name: 'GFG Jobathons',
    link: 'https://practice.geeksforgeeks.org/contest/job-a-thon-17-hiring-challenge',
    bgColor: '#fff',
  },
];

const Highlights = () => {
  return (
    <>
      <style>
        {`
          .marquee {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            animation: marquee 30s linear 0s infinite;
            margin: 30px 0;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div className="overflow-hidden">
        <div className="marquee">
          {HighlightsData.map((highlight, i) => (
            <a
              className="flex justify-around items-center w-auto h-20 bg-white rounded-md shadow-md px-4 transform transition-all hover:scale-110 hover:-translate-y-2"
              href={highlight.link}
              target="_blank"
              rel="noreferrer noopener"
              key={i}
            >
              {/* <img className="w-10 object-contain" src={highlight.image} alt={highlight.name} /> */}
              <h2 className="text-lg text-black">{highlight.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Highlights;