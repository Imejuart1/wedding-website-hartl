"use client";
import { useState } from "react";
import styles from "./styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Tanseli & Roger</div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <span className={`${styles.bar} ${isMobileMenuOpen ? styles.active : ""}`}></span>
        <span className={`${styles.bar} ${isMobileMenuOpen ? styles.active : ""}`}></span>
        <span className={`${styles.bar} ${isMobileMenuOpen ? styles.active : ""}`}></span>
      </div>

      {/* Navigation Links */}
      <div
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.navLinksMobile : ""
        }`}
      >
        <Link href="/" className={styles.navLink}>
         Home
        </Link>
        <Link href="/photos" className={styles.navLink}>
          Photos
        </Link>
        <Link href="/q-a" className={styles.navLink}>
        Q & A
        </Link>
        <Link href="/travel" className={styles.navLink}>
        Travel
        </Link>
        <a href="#rsvp" className={styles.rsvpButton}>
          RSVP
        </a>
      </div>
    </nav>
  );
}
