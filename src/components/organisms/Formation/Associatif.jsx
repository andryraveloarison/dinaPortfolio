import React from "react";
import styles from "./Formation.module.css";

export const Associatif = () => {
    return (
        <section className={styles.assoBg} id="associatif">
            <div className={styles.container}>
                <p className={styles.secLabel}>Engagement</p>
                <h2 className={styles.secTitle}>Expériences associatives</h2>
                <div className={styles.assoCols}>
                    <div className={styles.assoCard}>
                        <p className={styles.assoDate}>Depuis janvier 2022</p>
                        <h3 className={styles.assoRole}>Chargée des Ressources Humaines</h3>
                        <p className={styles.assoOrg}>Groupe Artistique TaMMA — Tsarahonenana, Antananarivo</p>
                        <p className={styles.assoDesc}>Développement de la cohésion et de la motivation des membres, instauration d'une ambiance conviviale pour une meilleure collaboration artistique.</p>
                    </div>
                    <div className={styles.assoCard}>
                        <p className={styles.assoDate}>2017 – 2021</p>
                        <h3 className={styles.assoRole}>Chef d'équipe des Éclaireuses</h3>
                        <p className={styles.assoOrg}>Mpanazava Eto Madagasikara — Antananarivo</p>
                        <p className={styles.assoDesc}>Leadership d'équipe sur 4 années, développement des compétences techniques et de la créativité individuelle, gestion de projets collectifs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
