import React from "react";
import styles from "./Stats.module.css";

export const Stats = () => {
    return (
        <div className={styles.statsBand}>
            <div className={styles.statItem}>
                <div className={styles.statNum}>2+</div>
                <div className={styles.statLbl}>Années d'expérience</div>
            </div>
            <div className={styles.statItem}>
                <div className={styles.statNum}>5</div>
                <div className={styles.statLbl}>Postes occupés</div>
            </div>
            <div className={styles.statItem}>
                <div className={styles.statNum}>3</div>
                <div className={styles.statLbl}>Langues maîtrisées</div>
            </div>
            <div className={styles.statItem}>
                <div className={styles.statNum}>M2</div>
                <div className={styles.statLbl}>Mention Bien</div>
            </div>
        </div>
    );
};
