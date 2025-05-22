import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Merhaba, ben Zeynep.</h1>
        <p className={styles.description}>
          Bilgisayar mühendisliği öğrencisiyim.
        </p>
        <a href="#" className={styles.contactButton}>
          Benimle iletişime geçin.
        </a>
      </div>
      <img
        src={getImageUrl("hero/IMG-20250520-WA0025.webp")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
