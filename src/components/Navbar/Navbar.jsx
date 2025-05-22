import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolyo</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/menu-min.png")
              : getImageUrl("nav/IMG-20250520-WA0020.jpg")
          }
          alt="menu_button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#header">Anasayfa</a></li>
          <li><a href="#about">Ben Kimim</a></li>
          <li><a href="#experience">Neler Yapabilirim</a></li>
          <li><a href="#projects">Portfolyo</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
