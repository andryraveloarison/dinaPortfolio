import React from "react";
import styles from "./Interests.module.css";

export const Interests = () => {
    return (
        <div className={styles.portrait3Section}>
            <div className={styles.portrait3Inner}>
                <div className={styles.portrait3Visual}>
                    <svg viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="360" height="420" fill="#F5E8D8" rx="4" />
                        <circle cx="310" cy="340" r="120" fill="rgba(184,147,106,0.08)" />
                        <circle cx="50" cy="80" r="80" fill="rgba(184,147,106,0.06)" />
                        <path d="M90 420 C90 360 110 310 180 275 C250 310 270 360 270 420 Z" fill="#B8936A" />
                        <path d="M140 340 Q180 330 220 340 L210 420 L150 420 Z" fill="#9A7550" />
                        <path d="M90 330 Q75 350 70 380 L100 385 Q105 360 120 345 Z" fill="#9A7550" />
                        <path d="M270 330 Q285 350 290 380 L260 385 Q255 360 240 345 Z" fill="#9A7550" />
                        <rect x="163" y="243" width="34" height="38" rx="10" fill="#C4956A" />
                        <ellipse cx="180" cy="220" rx="56" ry="60" fill="#C4956A" />
                        <ellipse cx="180" cy="176" rx="70" ry="56" fill="#1A0F06" />
                        <ellipse cx="120" cy="205" rx="26" ry="40" fill="#1A0F06" />
                        <ellipse cx="240" cy="205" rx="26" ry="40" fill="#1A0F06" />
                        <ellipse cx="180" cy="158" rx="62" ry="36" fill="#1A0F06" />
                        <circle cx="162" cy="165" r="3" fill="#2D1A0A" opacity="0.4" />
                        <circle cx="180" cy="158" r="3" fill="#2D1A0A" opacity="0.4" />
                        <circle cx="198" cy="165" r="3" fill="#2D1A0A" opacity="0.4" />
                        <circle cx="170" cy="175" r="2.5" fill="#2D1A0A" opacity="0.3" />
                        <circle cx="190" cy="175" r="2.5" fill="#2D1A0A" opacity="0.3" />
                        <ellipse cx="158" cy="170" rx="16" ry="10" fill="#241508" opacity="0.3" />
                        <ellipse cx="163" cy="222" rx="9" ry="7" fill="#1A0F06" />
                        <ellipse cx="197" cy="222" rx="9" ry="7" fill="#1A0F06" />
                        <ellipse cx="165" cy="221" rx="3.5" ry="3.5" fill="#fff" opacity="0.3" />
                        <ellipse cx="199" cy="221" rx="3.5" ry="3.5" fill="#fff" opacity="0.3" />
                        <path d="M154 211 Q163 207 172 210" stroke="#1A0F06" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                        <path d="M188 210 Q197 207 206 211" stroke="#1A0F06" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                        <path d="M170 228 Q180 236 190 228" stroke="#A0745A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M162 243 Q180 260 198 243" stroke="#A0745A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <circle cx="157" cy="246" r="2" fill="#B87058" opacity="0.4" />
                        <circle cx="203" cy="246" r="2" fill="#B87058" opacity="0.4" />
                        <circle cx="124" cy="228" r="7" stroke="#D4B896" strokeWidth="2" fill="none" />
                        <circle cx="236" cy="228" r="7" stroke="#D4B896" strokeWidth="2" fill="none" />
                        <rect x="60" y="355" width="50" height="65" rx="2" fill="#FDF8F3" stroke="#D4B896" strokeWidth="1.5" transform="rotate(-15 60 355)" />
                        <rect x="62" y="357" width="46" height="61" rx="1" fill="#FDF8F3" transform="rotate(-15 62 357)" />
                        <line x1="68" y1="372" x2="100" y2="362" stroke="#D4B896" strokeWidth="1" opacity="0.5" />
                        <line x1="70" y1="380" x2="102" y2="370" stroke="#D4B896" strokeWidth="1" opacity="0.4" />
                        <text x="280" y="100" fontSize="28" fill="#B8936A" opacity="0.4" fontFamily="serif">♪</text>
                        <text x="300" y="130" fontSize="18" fill="#B8936A" opacity="0.25" fontFamily="serif">♫</text>
                    </svg>
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
