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
              <svg viewBox="0 0 360 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="360" height="480" fill="#F0DDD0" />
                <circle cx="310" cy="60" r="70" stroke="#C9A87A" strokeWidth="1" fill="none" opacity="0.35" />
                <circle cx="310" cy="60" r="45" stroke="#C9A87A" strokeWidth="0.5" fill="none" opacity="0.2" />
                <rect x="100" y="300" width="160" height="180" fill="#5C4228" rx="2" />
                <path d="M155 305 L180 280 L205 305 L195 390 L165 390 Z" fill="#4A3420" />
                <path d="M100 350 Q130 340 180 365 Q220 340 260 350 L260 390 Q220 380 180 395 Q130 380 100 390 Z" fill="#7A5C38" />
                <rect x="160" y="295" width="40" height="80" fill="#FDF8F3" opacity="0.9" />
                <rect x="164" y="262" width="32" height="38" rx="9" fill="#C4956A" />
                <ellipse cx="180" cy="238" rx="55" ry="60" fill="#C4956A" />
                <ellipse cx="180" cy="195" rx="60" ry="40" fill="#1A0F06" />
                <ellipse cx="128" cy="225" rx="20" ry="32" fill="#1A0F06" />
                <ellipse cx="232" cy="225" rx="20" ry="32" fill="#1A0F06" />
                <ellipse cx="180" cy="182" rx="28" ry="22" fill="#2D1A0A" />
                <ellipse cx="180" cy="176" rx="20" ry="14" fill="#1A0F06" />
                <ellipse cx="202" cy="180" rx="8" ry="5" fill="#B8936A" />
                <ellipse cx="165" cy="238" rx="8" ry="6.5" fill="#1A0F06" />
                <ellipse cx="195" cy="238" rx="8" ry="6.5" fill="#1A0F06" />
                <ellipse cx="167" cy="237" rx="3" ry="3" fill="#fff" opacity="0.28" />
                <ellipse cx="197" cy="237" rx="3" ry="3" fill="#fff" opacity="0.28" />
                <path d="M157 227 Q165 223 173 226" stroke="#1A0F06" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M187 226 Q195 223 203 227" stroke="#1A0F06" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M176 244 Q180 250 184 244" stroke="#A0745A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M167 260 Q180 272 193 260" stroke="#A0745A" strokeWidth="2" fill="none" strokeLinecap="round" />
                <line x1="128" y1="248" x2="128" y2="268" stroke="#B8936A" strokeWidth="1.5" />
                <circle cx="128" cy="270" r="4" fill="#D4B896" />
                <line x1="232" y1="248" x2="232" y2="268" stroke="#B8936A" strokeWidth="1.5" />
                <circle cx="232" cy="270" r="4" fill="#D4B896" />
                <path d="M164 285 Q180 294 196 285" stroke="#D4B896" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="180" cy="295" r="3" fill="#B8936A" />
              </svg>
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
