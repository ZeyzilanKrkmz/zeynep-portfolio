import React,{useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";


export const Navbar =()=>{
    const[menuOpen,setMenuOpen]=useState(false);



    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolyo</a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} src={
                 menuOpen ? getImageUrl("assets/nav/menu.png"):
                 getImageUrl("assets/nav/close.png")
                 } 
                 alt="menu_button"
                 onClick={()=>setMenuOpen(!menuOpen)}
                 />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}>
            <li><a href="#anasayfa">Anasayfa</a></li>
            <li><a href="#ben kimim">Ben Kimim</a></li>
            <li><a href="#neleryapabilirim">Neler Yapabilirim</a></li>
            <li><a href="#portfolyo">Portfolyo</a></li>
            <li><a href="#iletisim">İletişim</a></li>
        </ul>

        </div>

    </nav>;
};