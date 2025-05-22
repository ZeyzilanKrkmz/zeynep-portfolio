import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>İletişim</h2>
        <p>Çekinmeden iletişime geçin.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/arroba")}
            alt="email icon"
            className={styles.icon}
          />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/IMG-20250520-WA0023")}
            alt="linkedin icon"
            className={styles.icon}
          />
          <a href="https://www.linkedin.com/in/zeynep-zilan-korkmaz-6621a62a4/">linkedin.com/zeynepzilankorkmaz</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/IMG-20250520-WA0015")}
            alt="github icon"
            className={styles.icon}
          />
          <a href="https://github.com/ZeyzilanKrkmz">github.com/ZeyzilanKrkmz</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
