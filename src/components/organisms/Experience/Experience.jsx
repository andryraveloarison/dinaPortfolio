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
            <img 
              src="/photo3.jpeg" 
              alt="Portrait professionnel - Expérience"
              className={styles.portraitImg}
            />
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
