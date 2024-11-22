import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Tanseli & Hartl</div>
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
        <div className={styles.left}>
          <h1 className={styles.title}>Tanseli & Hartl</h1>
          <p className={styles.subtitle}>We're getting married!</p>
          <p className={styles.date}>Saturday, April 22, 2025</p>
          <a href="#rsvp" className={styles.rsvpButton}>RSVP</a>
        </div>

        {/* Right Section: Background Image */}
        <div className={styles.right}>
          <img
            src="/img/weddinghall.jpg"
            alt="Background trees"
            className={styles.backgroundImage}
          />
        </div>

        {/* Floating Image of the Couple */}
        <div className={styles.floatingImage}>
          <img
            src="/img/tanseli.jpeg"
            alt="Tanseli and Hartl"
            className={styles.coupleImage}
          />
        </div>
      </section>
    </div>
  );
}
