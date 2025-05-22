import React from "react";
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About=()=>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Hakkımda</h2>
        <div className={styles.content}>
            <img src={getImageUrl("assets/about/aboutImg.png")} alt="me siiting with laptop"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("assets/about/click.png")} 
                    alt="cursor icon"
                    className={styles.aboutImage}/>
                    <div className={styles.aboutItemText}><h3>
                        </h3>Bilgisayar Mühendisliği</div>
                        <p></p>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("assets/about/database.png")} alt="server icon"/>
                    <div className={styles.aboutItemText}><h3>
                        </h3>Veri bilimi meraklısı ve ilgilisi</div>
                        <p></p>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("assets/about/ai.png")} alt="ai icon"/>
                    <div className={styles.aboutItemText}><h3>
                        </h3>ai araştırmacısı ve kullanıcısı</div>
                        <p></p>
                </li>

            </ul>
            </div></section>
    );
};
