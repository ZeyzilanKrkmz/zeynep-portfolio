import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero=()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Merhaba,ben Zeynep.</h1>
        <p className={styles.description}>Bilgisayar mühendisliği öğrencisiyim..</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Benimle iletişime geçin.</a>
        </div>
        <img src={getImageUrl("assets/hero/heroImage.png")} alt="hero image of me" className={styles.HeroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>;


};