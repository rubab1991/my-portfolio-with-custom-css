import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero} data-aos="fade-right">
      <Image
        src="/images/background.png"
        layout="fill"
        objectFit="cover"
        alt="background"
        className={styles.image}
      />
      <br />
      <br />
      <br />
      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <Image src="/images/profile.png" alt="profile" width={300} height={300} />
        </div>
        <div className={styles.text}>
            <p className='text-4xl flex justify-center' data-aos="fade-right">I am Rubab Bukhari</p>
          <p>
            I am a frontend developer passionate about creating clean, responsive, and user-friendly web applications.
            With expertise in TypeScript, Next.js, HTML, CSS, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
