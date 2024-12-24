"use client";
import styles from "./styles/Footer.module.scss";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      {/* Footer Links */}
      <div className={styles.footerLinks}>
        <Link href="/" className={styles.footerLink}>
          Home
        </Link>
        <Link href="/photos" className={styles.footerLink}>
          Photos
        </Link>
        <Link href="/q-a" className={styles.footerLink}>
          Q & A
        </Link>
        <Link href="/travel" className={styles.footerLink}>
          Travel
        </Link>
        <a href="#rsvp" className={styles.footerButton}>
          RSVP
        </a>
      </div>

      {/* Footer Content */}
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Tanseli & Roger. All Rights Reserved.</p>
        <p>Website lovingly crafted for our special day!</p>
      </div>

      {/* Social Media Icons */}
      <div className={styles.socialMedia}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}
