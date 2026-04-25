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
          <svg viewBox="0 0 400 540" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="400" height="540" fill="#F5E8D8" rx="0" />
            <rect x="0" y="400" width="400" height="140" fill="#E8D4BC" rx="0" />
            <rect x="0" y="398" width="400" height="6" fill="#C9A87A" rx="0" />
            <rect x="80" y="350" width="180" height="110" rx="6" fill="#D4B896" stroke="#B8936A" strokeWidth="1.5" />
            <rect x="90" y="358" width="160" height="85" rx="3" fill="#2D2218" />
            <rect x="94" y="362" width="152" height="77" rx="2" fill="#3A2E20" />
            <rect x="100" y="368" width="80" height="8" rx="2" fill="#B8936A" opacity="0.7" />
            <rect x="100" y="380" width="120" height="6" rx="2" fill="#7A5C38" opacity="0.5" />
            <rect x="100" y="390" width="100" height="6" rx="2" fill="#7A5C38" opacity="0.4" />
            <rect x="100" y="400" width="110" height="6" rx="2" fill="#7A5C38" opacity="0.3" />
            <ellipse cx="170" cy="448" rx="90" ry="8" fill="#C9A87A" opacity="0.6" />
            <rect x="280" y="390" width="80" height="100" rx="3" fill="#FDF8F3" stroke="#D4B896" strokeWidth="1" />
            <line x1="292" y1="410" x2="348" y2="410" stroke="#D4B896" strokeWidth="1" />
            <line x1="292" y1="422" x2="348" y2="422" stroke="#D4B896" strokeWidth="1" />
            <line x1="292" y1="434" x2="340" y2="434" stroke="#D4B896" strokeWidth="1" />
            <path d="M120 440 C120 380 140 340 200 310 C260 340 280 380 280 440 Z" fill="#7A5C38" />
            <path d="M170 330 L200 310 L230 330 L220 440 L180 440 Z" fill="#5C4228" />
            <rect x="185" y="280" width="30" height="40" rx="8" fill="#C4956A" />
            <ellipse cx="200" cy="255" rx="52" ry="58" fill="#C4956A" />
            <ellipse cx="200" cy="218" rx="62" ry="48" fill="#1A0F06" />
            <ellipse cx="148" cy="245" rx="22" ry="36" fill="#1A0F06" />
            <ellipse cx="252" cy="245" rx="22" ry="36" fill="#1A0F06" />
            <ellipse cx="200" cy="196" rx="56" ry="30" fill="#1A0F06" />
            <ellipse cx="178" cy="208" rx="14" ry="10" fill="#2D1A0A" opacity="0.5" />
            <ellipse cx="184" cy="256" rx="8" ry="6" fill="#1A0F06" />
            <ellipse cx="216" cy="256" rx="8" ry="6" fill="#1A0F06" />
            <ellipse cx="186" cy="255" rx="3" ry="3" fill="#fff" opacity="0.3" />
            <ellipse cx="218" cy="255" rx="3" ry="3" fill="#fff" opacity="0.3" />
            <path d="M176 246 Q184 242 192 245" stroke="#1A0F06" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M208 245 Q216 242 224 246" stroke="#1A0F06" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M196 262 Q200 270 204 262" stroke="#A0745A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M186 278 Q200 290 214 278" stroke="#A0745A" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="148" cy="266" r="5" fill="#B8936A" />
            <circle cx="148" cy="274" r="3" fill="#D4B896" />
            <circle cx="252" cy="266" r="5" fill="#B8936A" />
            <circle cx="252" cy="274" r="3" fill="#D4B896" />
            <path d="M180 330 L200 310 L220 330" stroke="#D4B896" strokeWidth="1.5" fill="none" />
            <circle cx="340" cy="80" r="50" stroke="#B8936A" strokeWidth="1" fill="none" opacity="0.3" />
            <circle cx="340" cy="80" r="35" stroke="#B8936A" strokeWidth="0.5" fill="none" opacity="0.2" />
            <rect x="60" y="480" width="280" height="36" rx="2" fill="none" stroke="#B8936A" strokeWidth="1" opacity="0.4" />
            <text x="200" y="503" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#7A5C38" fontStyle="italic" opacity="0.7">HR Consultant · Madagascar</text>
          </svg>
        </div>
      </div>
    </section>
  );
};
