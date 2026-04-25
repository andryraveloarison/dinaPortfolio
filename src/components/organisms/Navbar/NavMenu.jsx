import React, { useState, useEffect } from "react";
import styles from "./NavMenu.module.css";

export const NavMenu = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <a href="#" className={styles.navLogo}>F.D.F</a>
            <ul className={styles.navLinks}>
                <li><a href="#about">À propos</a></li>
                <li><a href="#experience">Expériences</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#formation">Formation</a></li>
                <li><a href="#associatif">Engagement</a></li>
                <li><a href="#trainings">Formations diverses</a></li>
            </ul>
        </nav>
    );
};
