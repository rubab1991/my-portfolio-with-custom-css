// src/app/projects/page.tsx
import React from 'react';
import './ProjectCard.css';
import ProjectCard from './ProjectCard';
import styles from './Project.module.css';

const projects = [
  { title: "Countdown Timer", description: "Countdown Timer using Next.js and Tailwind CSS.", languages: ["Next.js", "Tailwind CSS", "Typescript"], image: "/images/project1.PNG" },
  { title: "Weather Widget", description: "A weather widget app that fetches real-time weather data.", languages: ["Next.js", "Tailwind CSS", "API Integration"], image: "/images/project2.PNG" },
  { title: "Birthday Wish App", description: "An interactive app for sending personalized birthday messages with animations", languages: ["Next.js", "Tailwind CSS", "API Integration"], image: "/images/project3.PNG" },
  { title: "Governor Sindh Website", description: "A responsive website providing official updates and information on the Governor of Sindh's office.", languages: ["Next.js", "Tailwind CSS", "Typescript"], image: "/images/project4.PNG" },
  { title: "Number Guessing Game", description: "A fun web app where players guess numbers with interactive feedback and state management.", languages: ["Next.js", "Tailwind CSS", "Typescript"], image: "/images/project5.PNG" },
  { title: "To Do List App", description: "A simple, intuitive app for managing tasks and staying organized.", languages: ["Next.js", "Tailwind CSS", "Typescript"], image: "/images/project6.PNG" },
  { title: "PIAIC Website", description: "A responsive site showcasing key programs, goals, and updates for presidential initiatives.", languages: ["Next.js", "Tailwind CSS", "Typescript"], image: "/images/project7.PNG" },
  { title: "Static Resume Builder", description: "A static website for creating professional resumes quickly and easily.", languages: ["Next.js", "Tailwind CSS", "Typescript"], image: "/images/project8.PNG" },
];

export default function Projects() {
  return (
    <div className={`${styles.project} relative`} >
      <video className={`${styles.backgroundVideo} brightness-50`} autoPlay loop muted>
        <source src="/images/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="text-4xl text-center my-8 text-white z-10 relative" data-aos="flip-left">My Projects</h2>
      <div className={`${styles.projectsGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto z-10 relative p-4`}  data-aos="zoom-in">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            languages={project.languages}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
