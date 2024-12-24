"use client";
import { useState } from "react";
import styles from "./Page.module.scss";
import Link from "next/link";

export default function Home(): JSX.Element {
  const [uploads, setUploads] = useState<
    { type: "image" | "video"; src: string }[]
  >([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newUploads = Array.from(files).map((file) => {
        const src = URL.createObjectURL(file);
        const type = file.type.startsWith("video") ? "video" : "image";
        return { type, src };
      });
      setUploads((prev: any) => [...prev, ...newUploads]);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Our Special Day</h1>
        <p>Celebrate the moments we shared with these memories.</p>
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

      <section className={styles.galleryPreview}>
        {uploads.length > 1 && <h2>Featured Memories</h2>}
        <div className={styles.mediaGrid}>
          {uploads.slice(0, 3).map((upload, index) => (
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
        {uploads.length > 3 && (
          <Link href="/photos" className={styles.viewMoreButton}>
            View More Memories
          </Link>
        )}
      </section>
    </div>
  );
}
