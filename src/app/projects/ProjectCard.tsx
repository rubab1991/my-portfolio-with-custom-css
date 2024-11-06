// src/app/projects/ProjectCard.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import './ProjectCard.css'; // Adjust if necessary
import styles from './Project.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  languages: string[];
  image: string;
}

const languageColors: Record<string, string> = {
  "Next.js": "#E34F26",
  "Tailwind CSS": "#38BDF8",
  "Typescript": "#3178C6",
  "CSS": "#264de4",
  "API Integration": "#F56565",
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages, image }) => {
  return (
    <div className={`${styles.projectCard} project-card`}>
      <Image 
        src={image} 
        alt={`Image of ${title}`} 
        width={400} 
        height={300} 
        className="project-image" 
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="language-list">
        {languages.map((language: string, index: number) => (
          <span
            key={index}
            style={{
              color: "white",
              backgroundColor: languageColors[language] || "black",
            }}
            className="language-item px-2 py-1 rounded"
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
