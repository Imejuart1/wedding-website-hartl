"use client";
import { useState } from "react";
import styles from "./Page.module.scss";
import Lightbox from "./Lightbox";

export default function Home() {
  const [uploads, setUploads] = useState<{ type: "image" | "video"; src: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const src = e.target?.result as string;
          const type = file.type.startsWith("video") ? "video" : "image";
          setUploads((prev) => [...prev, { type, src }]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Thank You for Celebrating With Us</h1>
        <p>We are so grateful to have shared this special moment with you.</p>
        <label htmlFor="upload" className={styles.uploadButton}>
          Upload Your Memories
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </header>

      <section className={styles.gallery}>
        <h2>Memories</h2>
        <div className={styles.mediaGrid}>
          {uploads.map((upload, index) => (
            <div
              key={index}
              className={styles.mediaWrapper}
              onClick={() => setLightboxIndex(index)}
            >
              {upload.type === "image" ? (
                <img src={upload.src} alt={`Memory ${index + 1}`} className={styles.media} />
              ) : (
                <video src={upload.src} className={styles.media} controls></video>
              )}
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          media={uploads}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
