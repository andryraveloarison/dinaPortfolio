import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.footer} id="contact">
      <p className={styles.footName}>Faneva Dina Fitiavana</p>
      <p className={styles.footTag}>HR Consultant · Madagascar</p>
      <div className={styles.footLinks}>
        <a href="mailto:dinafitiavana14@gmail.com">dinafitiavana14@gmail.com</a>
        <a href="tel:+261343961681">034 39 616 81</a>
        <a href="#">@Dina Fitiavana</a>
      </div>
      <div className={styles.footHr}></div>
    </footer>
  );
};
