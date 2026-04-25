import React from "react";
import styles from "./Atouts.module.css";

export const Atouts = () => {
    const atouts = [
        {
            icon: "◈",
            name: "Sociable",
            quote: "« L'on est plus sociable et d'un meilleur commerce par le cœur que par l'esprit »"
        },
        {
            icon: "◉",
            name: "Responsable",
            quote: "« La responsabilité est le prix à payer du succès. »"
        },
        {
            icon: "◌",
            name: "Curieuse",
            quote: "Une curiosité incessante pour les relations humaines et l'épanouissement de chaque individu."
        }
    ];

    return (
        <section className={styles.atoutBg} id="atouts">
            <div className={styles.container}>
                <p className={styles.secLabel}>Caractère</p>
                <h2 className={styles.secTitle}>Ce qui me définit</h2>
            </div>
            <div className={styles.atoutGrid}>
                {atouts.map((atout, index) => (
                    <div key={index} className={styles.atoutItem}>
                        <span className={styles.atoutIcon}>{atout.icon}</span>
                        <p className={styles.atoutName}>{atout.name}</p>
                        <p className={styles.atoutQ}>{atout.quote}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
