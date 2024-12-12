"use client";
import { useState } from "react";
import styles from "./Lightbox.module.scss";

interface LightboxProps {
  media: { type: "image" | "video"; src: string }[];
  onClose: () => void;
  initialIndex: number;
}

export default function Lightbox({ media, onClose, initialIndex }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={styles.lightbox}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>
        {media[currentIndex].type === "image" ? (
          <img src={media[currentIndex].src} alt={`Media ${currentIndex + 1}`} />
        ) : (
          <video src={media[currentIndex].src} controls autoPlay loop></video>
        )}
        <button className={styles.prev} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.next} onClick={handleNext}>
          &#10095;
        </button>
        <button className={styles.close} onClick={onClose}>
          &#10005;
        </button>
      </div>
    </div>
  );
}
