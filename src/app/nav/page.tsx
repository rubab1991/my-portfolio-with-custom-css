import React from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './Nav.module.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={styles.nav }  data-aos="zoom-in">
      <ul >
        <li> {/* Wrap the logo in an li tag */}
          <div className={styles.logo} data-aos="flip-right">
            <Image src="/images/logo.png" width={60} height={60} alt="logo" />
          </div>
        </li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
