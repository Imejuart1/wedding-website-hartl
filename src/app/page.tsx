"use client"
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Tanseli & Roger</div>
        <div className={styles.navLinks}>
          <a href="#wedding" className={styles.navLink}>The Wedding</a>
          <a href="#registry" className={styles.navLink}>Registry</a>
          <a href="#getting-there" className={styles.navLink}>Getting There</a>
          <a href="#rsvp" className={styles.rsvpButton}>RSVP</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Left Section: Text */}
        <div className={`${styles.left} ${isLoaded ? styles.animateLeft : ''}`}>
          <h1 className={styles.title}>Tanseli & Roger</h1>
          <p className={styles.subtitle}>We're getting married!</p>
          <p className={styles.date}>Saturday, August 22, 2024</p>
          <a href="#rsvp" className={styles.rsvpButton}>RSVP</a>
        </div>

        {/* Right Section: Background Image */}
        <div className={`${styles.right} ${isLoaded ? styles.animateRight : ''}`}>
          <img
            src="/img/mary.png"
            alt="Background trees"
            className={styles.backgroundImage}
          />
        </div>

        {/* Floating Image of the Couple */}
       {/*} <div className={styles.floatingImage}>
          <img
            src="/img/Rogertanseli.jpg"
            alt="Tanseli and Roger"
            className={styles.coupleImage}
          />
        </div>*/}
      </section>

      <section className={styles.excite}>
        <p>We're so excited to celebrate this special moment with our closest loved ones!</p>
      </section>
    </div>
  );
}
