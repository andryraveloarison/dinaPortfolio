import React from "react";
import styles from "./Formation.module.css";
import history from "../../../data/history.json";

export const Education = () => {
    return (
        <section className={styles.formBg} id="formation">
            <div className={styles.container}>
                <p className={styles.secLabel}>Académique</p>
                <h2 className={styles.secTitle}>Formation</h2>
                <div className={styles.formGrid}>
                    {history.map((item, index) => (
                        <div key={index} className={styles.formCard}>
                            <span className={styles.formYear}>{item.endDate.slice(-2)}</span>
                            <p className={styles.formLvl}>{item.role.split(" ")[0] || item.role}</p>
                            <h3 className={styles.formTitle}>{item.role}</h3>
                            <p className={styles.formPlace}>{item.organisation}</p>
                            <span className={styles.formBadge}>{item.experiences[0]}</span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};
