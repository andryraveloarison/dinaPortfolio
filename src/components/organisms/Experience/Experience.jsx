import React from "react";
import styles from "./Experience.module.css";
import experiences from "../../../data/experiences.json";

export const Experience = () => {
  return (
    <section className={styles.expBg} id="experience">
      <div className={styles.container}>
        <p className={styles.secLabel}>Parcours</p>
        <h2 className={styles.secTitle}>Expériences professionnelles</h2>

        <div className={styles.expPortraitWrap}>
          <div className={styles.expPortraitCard}>
            <svg viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="220" height="280" fill="#2D2218" rx="2" />
              <rect x="0" y="200" width="220" height="80" fill="#231A12" />
              <rect x="0" y="198" width="220" height="5" fill="#B8936A" opacity="0.3" />
              <rect x="20" y="215" width="80" height="55" rx="2" fill="#FDF8F3" opacity="0.15" />
              <line x1="28" y1="228" x2="92" y2="228" stroke="#B8936A" strokeWidth="0.8" opacity="0.5" />
              <line x1="28" y1="238" x2="88" y2="238" stroke="#B8936A" strokeWidth="0.8" opacity="0.4" />
              <line x1="28" y1="248" x2="80" y2="248" stroke="#B8936A" strokeWidth="0.8" opacity="0.3" />
              <line x1="108" y1="220" x2="130" y2="255" stroke="#D4B896" strokeWidth="2" strokeLinecap="round" />
              <circle cx="130" cy="257" r="2" fill="#B8936A" />
              <path d="M50 270 C50 230 70 200 110 178 C150 200 170 230 170 270 Z" fill="#7A5C38" />
              <path d="M90 195 L110 178 L130 195 L124 270 L96 270 Z" fill="#5C4228" />
              <rect x="98" y="190" width="24" height="50" fill="#FDF8F3" opacity="0.8" />
              <rect x="98" y="164" width="24" height="28" rx="7" fill="#C4956A" />
              <ellipse cx="110" cy="144" rx="42" ry="46" fill="#C4956A" />
              <ellipse cx="110" cy="112" rx="48" ry="34" fill="#1A0F06" />
              <ellipse cx="70" cy="132" rx="18" ry="28" fill="#1A0F06" />
              <ellipse cx="150" cy="132" rx="18" ry="28" fill="#1A0F06" />
              <ellipse cx="110" cy="100" rx="42" ry="22" fill="#1A0F06" />
              <ellipse cx="94" cy="106" rx="10" ry="7" fill="#2D1A0A" opacity="0.4" />
              <ellipse cx="99" cy="144" rx="7" ry="5.5" fill="#1A0F06" />
              <ellipse cx="121" cy="144" rx="7" ry="5.5" fill="#1A0F06" />
              <ellipse cx="101" cy="143" rx="2.5" ry="2.5" fill="#fff" opacity="0.3" />
              <ellipse cx="123" cy="143" rx="2.5" ry="2.5" fill="#fff" opacity="0.3" />
              <path d="M93 136 Q99 132 105 135" stroke="#1A0F06" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M115 135 Q121 132 127 136" stroke="#1A0F06" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M105 150 Q110 155 115 150" stroke="#A0745A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M100 162 Q110 172 120 162" stroke="#A0745A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <circle cx="68" cy="152" r="4" fill="#B8936A" />
              <circle cx="152" cy="152" r="4" fill="#B8936A" />
              <text x="110" y="268" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="9" fill="#B8936A" opacity="0.8" fontStyle="italic">En entretien</text>
            </svg>
            <p className={styles.expPortraitCaption}>Consultante en action</p>
          </div>
        </div>

        <div className={styles.timeline}>
          {experiences.filter(exp => !exp.title.includes("Efficacité") && !exp.title.includes("Techniques") && !exp.title.includes("Affirmation")).map((exp, id) => (
            <div key={id} className={styles.tlItem}>
              <div className={styles.tlDot}></div>
              <p className={styles.tlDate}>{exp.date}</p>
              <h3 className={styles.tlRole}>{exp.title.split(" - ")[0]}</h3>
              <p className={styles.tlCo}>{exp.title.split(" - ")[1] || "Vivetic Group"}</p>
              <ul className={styles.tlDesc}>
                {exp.contents.split(". ").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
