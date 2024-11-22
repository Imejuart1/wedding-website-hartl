"use client"
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const loadImages = setTimeout(() => setIsLoaded(true), 1000); 
    return () => clearTimeout(loadImages);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const locationText = "CISON DI VALMARINO, PROVINCE OF TREVISO";
      let index = 0;

      const typeWriter = setInterval(() => {
        if (index < locationText.length) {
          setTypedText((prev) => locationText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeWriter);
        }
      }, 100); // Typing speed in ms

      return () => clearInterval(typeWriter);
    }
  }, [isLoaded]);
  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <span className={styles.location}>{typedText}</span>
      <section className={styles.hero}>
        {/* Left Section: Text */}
        <div className={`${styles.left} ${isLoaded ? styles.animateLeft : ''}`}>
          <h1 className={styles.title}>Tanseli & Roger</h1>
          <p className={styles.subtitle}>We're getting married!</p>
          <p className={styles.date}>Saturday, August 30, 2024</p>
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

      <section className={styles.schedule}>
        <h2 className={styles.scheduleTitle}>Event Schedule</h2>
        <div className={styles.eventList}>
          <div className={styles.event}>
            <h3 className={styles.eventTitle}>Welcome Reception</h3>
            <p className={styles.eventDate}>Friday, August 30, 2024</p>
            <p className={styles.eventTime}>18:00–20:30</p>
            <p className={styles.eventDetails}>
              <strong>Attire:</strong> Casual <br />
              Caffe Roma <br />
              Piazza Roma 7 Cison di Valmarino <br />
              Drinks and light bites will be served
            </p>
          </div>

          <div className={styles.event}>
            <h3 className={styles.eventTitle}>After Party</h3>
            <p className={styles.eventDate}>Saturday, August 31, 2024</p>
            <p className={styles.eventTime}>23:30–02:00</p>
            <p className={styles.eventDetails}>
              <strong>Attire:</strong> Come as you like <br />
              Cantina di Ottone Castel Brando
            </p>
          </div>

          <div className={styles.event}>
            <h3 className={styles.eventTitle}>Day After Breakfast</h3>
            <p className={styles.eventDate}>Sunday, September 1, 2024</p>
            <p className={styles.eventTime}>09:00–12:00</p>
            <p className={styles.eventDetails}>
              <strong>Attire:</strong> Casual <br />
              Sansovino Restaurant Castel Brando
            </p>
          </div>

          <div className={styles.event}>
            <h3 className={styles.eventTitle}>Farewell Reception</h3>
            <p className={styles.eventDate}>Sunday, September 1, 2024</p>
            <p className={styles.eventTime}>19:00–00:00</p>
            <p className={styles.eventDetails}>
              <strong>Attire:</strong> Casual <br />
              Casa Hartl <br />
              Tanseli and Roger’s home <br />
              Via Vittorio Veneto 3 <br />
              Cison di Valmarino <br />
              Drinks and light bites will be served
            </p>
          </div>

          <div className={styles.event}>
            <h3 className={styles.eventTitle}>Wedding Day</h3>
            <p className={styles.eventDate}>Sunday, September 1, 2024</p>
            <p className={styles.eventTime}>19:00–23:30</p>
            <p className={styles.eventDetails}>
              <strong>Attire:</strong> Formal / Black Tie <br />
              Seated Dinner <br />
              Dance and Party with us <br />
              Teatro Tenda Castel Brando, Cison di Valmarino
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ceremonyReception}>
  <div className={styles.event}>
    <div className={styles.time}>17:00–18:00</div>
    <div className={styles.details}>
      <h3 className={styles.title}>Ceremony</h3>
      <p>Attire: Formal / Black Tie</p>
      <p>San Martino Chapel Castel Brando</p>
    </div>
  </div>

  <div className={styles.event}>
    <div className={styles.time}>18:00–19:00</div>
    <div className={styles.details}>
      <h3 className={styles.title}>Reception</h3>
      <p>Attire: Formal</p>
      <p>Reception San Martino Terrace Castel Brando</p>
    </div>
  </div>

  <div className={styles.logo}>
    <p>T&amp;R</p>
  </div>
</section>
    </div>
  );
}
