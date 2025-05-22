import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Hakkımda</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/IMG-20250520-WA0024")}
          alt="me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/IMG-20250520-WA0016")}
              alt="cursor icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Bilgisayar Mühendisliği</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/IMG-20250520-WA0019")}
              alt="server icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Veri bilimi meraklısı ve ilgilisi</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/IMG-20250520-WA0021")}
              alt="ai icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>AI araştırmacısı ve kullanıcısı</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/horoscope_5335184.webp")}
              alt="astro icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Astroloji ilgilisi</h3>
            </div>
          </li><li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/alchemy_2579305.webp")}
              alt="cinema icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Okült bilimler meraklısı</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
