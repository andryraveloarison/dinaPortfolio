import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <p className={styles.secLabel}>À propos</p>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutPortrait}>
            <div className={styles.aboutPortraitLabel}>Portrait</div>
            <div className={styles.aboutPortraitFrame}>
              <img 
                src="/photo2.jpeg" 
                alt="Portrait professionnel - À propos"
                className={styles.portraitImg}
              />
            </div>
            <div className={styles.aboutPortraitDeco}></div>
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.secTitle}>
              Une professionnelle<br /><em className={styles.italic}>passionnée</em>
            </h2>
            <p>
              Diplômée d'un Master II en Gestion — Management et Administration d'Entreprise à l'Université Catholique de Madagascar avec mention Bien et vice-major de promotion, je me suis spécialisée dans les Ressources Humaines avec une approche centrée sur l'humain.
            </p>
            <p>
              Depuis 2022, j'évolue dans le recrutement et le conseil RH, d'abord chez Vivetic Group puis en tant que HR Consultant chez FTHM Consulting. Chaque mission est pour moi l'occasion de donner de la valeur à chaque personne.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
