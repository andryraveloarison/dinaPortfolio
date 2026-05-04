import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroLeft}>
        <p className={styles.heroEyebrow}>Portfolio · Ressources Humaines</p>
        <h1 className={styles.heroName}>
          Faneva Dina<br /><em className={styles.italic}>Fitiavana</em>
        </h1>
        <p className={styles.heroTitle}>HR Consultant & Recrutement</p>
        <blockquote className={styles.heroQuote}>
          Une réelle passion pour les relations humaines et une curiosité incessante sur la manière de donner de l'importance à chaque personne.
        </blockquote>
        <div className={styles.heroContact}>
          <a href="mailto:dinafitiavana14@gmail.com"><span className={styles.cdot}></span>dinafitiavana14@gmail.com</a>
          <a href="tel:+261343961681"><span className={styles.cdot}></span>034 39 616 81</a>
          <a href="#"><span className={styles.cdot}></span>Andraisoro, Antananarivo — Madagascar</a>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine}></div>
          <span className={styles.scrollText}>Découvrir</span>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.portraitHero}>
          <img
            src="/photo1.jpeg"
            alt="Portrait Dina Fitiavana"
            className={styles.portraitImg}
          />
        </div>
      </div>
    </section>
  );
};
