"use client";
import { useState } from "react";
import styles from "./Photo.module.scss";

export default function Photos(): JSX.Element {
  const [uploads, setUploads] = useState<
    { type: "image" | "video"; src: string }[]
  >([]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Photo Gallery</h1>
        <p>Relive the beautiful moments from our special day.</p>
      </header>

      <section className={styles.gallery}>
        <div className={styles.mediaGrid}>
          {uploads.map((upload, index) => (
            <div key={index} className={styles.mediaWrapper}>
              {upload.type === "image" ? (
                <img
                  src={upload.src}
                  alt={`Memory ${index + 1}`}
                  className={styles.media}
                />
              ) : (
                <video src={upload.src} className={styles.media} controls />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
