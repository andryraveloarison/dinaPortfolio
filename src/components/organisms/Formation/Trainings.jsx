import React from "react";
import styles from "./Formation.module.css";

export const Trainings = () => {
    return (
        <section className={styles.trainBg} id="trainings">
            <div className={styles.container}>
                <p className={styles.secLabel}>Développement continu</p>
                <h2 className={styles.secTitle}>Formations diverses</h2>
                <div className={styles.trainGrid}>
                    {[
                        { year: "2024", name: "Efficacité organisationnelle", org: "Agile Conseils · Gestion du temps, communication non violente, gestion du stress" },
                        { year: "2024", name: "Techniques de recrutement", org: "Agile Conseils · Méthodes modernes du recrutement" },
                        { year: "2024", name: "Affirmation de soi & Assertivité", org: "Agile Conseils · Développement personnel professionnel" },
                        { year: "2022", name: "Lifeskills", org: "Ministère de la Jeunesse · Développement et accomplissement personnel" },
                        { year: "2021", name: "Plaidoirie", org: "Mpanazava Eto Madagasikara · Prise de parole en public" },
                        { year: "2019", name: "Girl Powered Nutrition (GPN)", org: "Association Mondiale des Guides et des Éclaireuses" }
                    ].map((train, index) => (
                        <div key={index} className={styles.trainItem}>
                            <span className={styles.trainPill}>{train.year}</span>
                            <div>
                                <p className={styles.trainName}>{train.name}</p>
                                <p className={styles.trainOrg}>{train.org}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
