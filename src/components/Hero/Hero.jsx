import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Merhaba, ben Zeynep.</h1>
        <p className={styles.description}>
          Bilgisayar mühendisliği öğrencisiyim.
        </p>
        <button onClick={toggleForm} className={styles.contactButton}>
          Benimle iletişime geçin.
        </button>

        {showForm && (
          <form className={styles.contactForm}>
            <input
              type="text"
              placeholder="Ad Soyad"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <textarea
              placeholder="İçerik"
              className={styles.textarea}
              rows="4"
              required
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Gönder
            </button>
          </form>
        )}
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
