// src/app/about/page.tsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about} >
      <video className={styles.backgroundVideo} width={50} height={50} autoPlay loop muted>
        <source src="/images/background.mp4" width={50} height={50} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content} data-aos="zoom-in">
        <p className={styles.heading}>About Me</p>
        <p className="text-gray-200">
          I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations. As a frontend developer specializing in building modern, responsive web applications, I bring a deep understanding of TypeScript, Next.js, HTML, CSS, and Tailwind CSS to each project. My focus is on creating visually appealing, highly interactive user interfaces that are both performant and user-friendly. With a passion for clean code and a keen eye for detail, I’m always exploring new ways to enhance user experiences and streamline development workflows.
        </p>
      </div>
    </div>
  );
};

export default About;
