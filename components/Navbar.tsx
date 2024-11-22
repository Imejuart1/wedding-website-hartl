"use client";
import { useState } from "react";
import styles from "./styles/Navbar.module.scss";

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
        <a href="#wedding" className={styles.navLink}>
          The Wedding
        </a>
        <a href="#registry" className={styles.navLink}>
          Registry
        </a>
        <a href="#getting-there" className={styles.navLink}>
          Getting There
        </a>
        <a href="#rsvp" className={styles.rsvpButton}>
          RSVP
        </a>
      </div>
    </nav>
  );
}
