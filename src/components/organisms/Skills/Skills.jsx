import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../../data/skills.json";

export const Skills = () => {
  const technicalSkills = [
    { name: "MS Office (Word, Excel, PowerPoint)", pct: "95%" },
    { name: "Canva / Vista Create", pct: "90%" },
    { name: "SPSS / Sphinx", pct: "80%" },
    { name: "MS Project", pct: "75%" },
    { name: "KoboToolbox", pct: "70%" }
  ];

  const languages = [
    { name: "Malgache", lvl: "Langue maternelle", dots: 5 },
    { name: "Français", lvl: "DELF — 86/100", dots: 4 },
    { name: "Anglais", lvl: "Niveau intermédiaire", dots: 3 }
  ];

  return (
    <section className={styles.compBg} id="competences">
      <div className={styles.container}>
        <p className={styles.secLabel}>Maîtrise</p>
        <h2 className={styles.secTitle}>Compétences</h2>
        <div className={styles.compCols}>
          <div>
            <h3 className={styles.compGroupTitle}>Outils informatiques</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillHead}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPct}>{skill.pct}</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillFill} style={{ width: skill.pct }}></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className={styles.compGroupTitle}>Langues</h3>
            <div className={styles.langList}>
              {languages.map((lang, index) => (
                <div key={index} className={styles.langItem}>
                  <div className={styles.langFlag}>{lang.name === "Malgache" ? "🇲🇬" : lang.name === "Français" ? "🇫🇷" : "🇬🇧"}</div>
                  <div className={styles.langInfo}>
                    <div className={styles.langName}>{lang.name}</div>
                    <div className={styles.langLvl}>{lang.lvl}</div>
                  </div>
                  <div className={styles.langDots}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`${styles.langDot} ${i < lang.dots ? styles.on : ""}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
