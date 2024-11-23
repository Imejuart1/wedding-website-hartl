"use client";
import React from "react";
import styles from "./QASection.module.scss";

const QASection = () => {
  const qaData = [
    {
      question: "WHY DID WE CHOOSE CASTEL BRANDO TO MARRY?",
      answer:
        "In July 2017 we celebrated Roger’s grandmother, Nonna Elia’s 91st birthday in Cison di Valmarino with family, kids, and friends. We loved Cison di Valmarino which is situated in the Prosecco foothills just at the gate of the Dolomites. In 2022 we fell in love with a house in Cison and our dreams of finding a second home came true. When we decided to celebrate our love with friends and family, Castel Brando came as a natural choice.",
    },
    {
      question: "WHAT WILL THE WEATHER BE?",
      answer:
        "Month of August in Cison average temperature during the day is 81F/27C - 61F/16C at night. August 31st will be the shortest day for Cison which means we’ll have the longest night to party.",
    },
    {
      question: "WHAT IS THE DRESS CODE?",
      answer:
        "Formal attire for wedding day. Get dressed up but also be comfortable to dance all night long. Casual chic on other events. Pack comfortable shoes for hikes and biking.",
    },
    {
      question: "IS PARKING AVAILABLE?",
      answer:
        "Yes, and parking is free. It is located at the bottom of the castle. There is a funicular at the parking lot that will bring you up to the castle.",
    },
    {
      question: "WILL YOUR WEDDING BE INDOORS OR OUTDOORS?",
      answer:
        "Ceremony will be indoor and outdoor. Reception will be outdoors. Seated wedding dinner and dancing will be outdoor covered with a big tent overlooking the Cison valley.",
    },
    {
      question: "AM I ALLOWED TO BRING PLUS ONE?",
      answer: "Absolutely, please let us know.",
    },
    {
      question: "ARE CHILDREN INVITED?",
      answer:
        "Children are welcome if you choose to bring them along. Please let us know.",
    },
    {
      question: "RSVP DEADLINE?",
      answer: "Please RSVP by June 15th, 2024.",
    },
    {
      question:
        "HOW CAN WE GET TO THE CASTEL BRANDO FROM CISON DI VALMARINO?",
      answer:
        "Castel Brando is located on the hills of Cison Di Valmarino. You can reach the Castle by car and there is also a panoramic funicular located in the village on the skirts of the Castle that can be taken to the Castle directly. Funicular is free for wedding guests. It runs 24 hrs.",
    },
    {
      question: "DIETARY RESTRICTIONS?",
      answer:
        "Please let us know if there are any restrictions in your diet.",
    },
    {
      question: "I HAVE MORE QUESTIONS",
      answer:
        "Please send your questions to tanseli@gmail.com or text 9172150603.",
    },
  ];

  return (
    <section className={styles.qaSection}>
      <h2 className={styles.title}>Q & A</h2>
      <div className={styles.qaContainer}>
        {qaData.map((qa, index) => (
          <div className={styles.qaItem} key={index}>
            <h3 className={styles.question}>{qa.question}</h3>
            <p className={styles.answer}>{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QASection;
