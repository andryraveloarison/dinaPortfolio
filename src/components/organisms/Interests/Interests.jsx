import React from "react";
import styles from "./Interests.module.css";

export const Interests = () => {
    return (
        <div className={styles.portrait3Section}>
            <div className={styles.portrait3Inner}>
                <div className={styles.portrait3Visual}>
                    <img 
                      src="/couverture.jpg" 
                      alt="Portrait - Intérêts et passions"
                      className={styles.portraitImg}
                    />
                </div>
                <div className={styles.portrait3Content}>
                    <h2>Au-delà du bureau<br /><em className={styles.italic}>une femme complète</em></h2>
                    <p>Ancienne cheffe d'équipe des Éclaireuses pendant 4 ans, je porte en moi les valeurs du leadership bienveillant, de la créativité collective et du service aux autres.</p>
                    <p>Aujourd'hui encore engagée en tant que Chargée RH au sein du Groupe Artistique TaMMA, je cultive la cohésion et la motivation comme art de vivre.</p>
                    <p>
                        Le sport, les voyages, le chant et la lecture font partie intégrante de mon équilibre et stimulent ma créativité au quotidien.
                    </p>
                </div>
            </div>
        </div>
    );
};
