import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Our Wedding Journey</h1>
        <p className={styles.subtitle}>
          Join us in celebrating love, laughter, and a lifetime of happiness.
        </p>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img
            src="/images/couple-photo.jpg"
            alt="Couple Photo"
            className={styles.heroImage}
          />
        </section>

        {/* Navigation Links */}
        <nav className={styles.navigation}>
          <a href="#our-story" className={styles.navLink}>Our Story</a>
          <a href="#gallery" className={styles.navLink}>Gallery</a>
          <a href="#events" className={styles.navLink}>Events</a>
          <a href="#registry" className={styles.navLink}>Registry</a>
          <a href="#rsvp" className={styles.navLink}>RSVP</a>
        </nav>

        {/* Sections */}
        <section id="our-story" className={styles.section}>
          <h2>Our Story</h2>
          <p>
            From the moment we met, our journey has been filled with love, joy,
            and unforgettable moments. Here’s a glimpse into our love story.
          </p>
        </section>

        <section id="gallery" className={styles.section}>
          <h2>Photo Gallery</h2>
          <p>
            Relive the moments that make our story special through these
            cherished photos.
          </p>
        </section>

        <section id="events" className={styles.section}>
          <h2>Wedding Events</h2>
          <p>
            Discover the schedule for all our wedding celebrations, from the
            ceremony to the after-party.
          </p>
        </section>

        <section id="registry" className={styles.section}>
          <h2>Registry</h2>
          <p>
            Your presence at our wedding is the best gift. For those who wish
            to bless us further, here’s our registry.
          </p>
        </section>

        <section id="rsvp" className={styles.section}>
          <h2>RSVP</h2>
          <p>We’d love to hear from you! Let us know if you can make it.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 [Your Names]. Built with love.</p>
      </footer>
    </div>
  );
}
