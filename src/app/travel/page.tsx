"use client";

import styles from './Travel.module.scss';

export default function Travel() {
  const travelData = [
    {
      title: "Castelbrando",
      image: "/img/castelbrando.jpg",
      address: "Via Pietro Mascagni, 8, 31030 Cison di Valmarino TV, Italy",
      phone: "0438 9761",
      rate: "Rate: 189 Euro",
      checkInOut: "Check-In: Thursday, August 29, 2024 | Check-Out: Monday, September 2, 2024",
      details:
        "Castel Brando is a Unesco Heritage Site. It is one of the largest and oldest in Europe. Located between breathtaking Dolomiti mountains.",
      website: "https://castelbrando.com",
      email: "info@castelbrando.com",
    },
    {
      title: "Hotel Villa Abbazia Relais & Chateaux",
      image: "/img/villa-abbazia.jpg",
      address: "Via Martiri della Libertà, 4, 31051 Follina TV, Italy",
      phone: "0438 971277",
      rate: "Use Code: tanseliroger",
      checkInOut: "Check-In: Thursday, August 29, 2024 | Check-Out: Monday, September 2, 2024",
      details:
        "Located in Follina, this luxury hotel is 8.9 mi (14.3 km) from Piazza Guglielmo Marconi.",
      website: "https://villaabbazia.com",
      email: "info@villaabbazia.com",
    },
    {
      title: "Ai Cadelach Hotel Restaurant & Wellness",
      image: "/img/cadelach.jpg",
      address: "Via Grava Giuseppe, 2, 31020 Revine Lago TV, Italy",
      phone: "0438 523010",
      rate: "Rate: 135 Euro",
      checkInOut: "Check-In: Thursday, August 29, 2024 | Check-Out: Monday, September 2, 2024",
      details:
        "Located in Revine Lago, Ai Cadelach Hotel is within a 5-minute drive of Santa Maria Lake and Livet Archaeological Park.",
      website: "https://cadelach.com",
      email: "info@cadelach.com",
    },
    // Add additional hotels based on your images
  ];

  return (
    <section className={styles.travel}>
      <h1 className={styles.title}>Travel & Accommodation</h1>
      <div className={styles.travelList}>
        {travelData.map((hotel, index) => (
          <div key={index} className={styles.card}>
            <img src={hotel.image} alt={hotel.title} className={styles.image} />
            <h2 className={styles.cardTitle}>{hotel.title}</h2>
            <p className={styles.address}>{hotel.address}</p>
            <p className={styles.phone}>{hotel.phone}</p>
            <p className={styles.rate}>{hotel.rate}</p>
            <p className={styles.checkInOut}>{hotel.checkInOut}</p>
            <p className={styles.details}>{hotel.details}</p>
            <div className={styles.buttons}>
              <a href={hotel.website} target="_blank" className={styles.button}>
                Website
              </a>
              <a href={`mailto:${hotel.email}`} className={styles.button}>
                Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
