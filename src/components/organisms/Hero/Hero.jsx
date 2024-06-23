import React, { useLayoutEffect, useRef } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
import { animateHero } from "../../../animations";

export const Hero = () => {

  let helloRef = useRef(null)
  let titleRef = useRef(null)
  let descriptionRef = useRef(null)
  let linkRef = useRef(null)

  useLayoutEffect(() => {

    animateHero(helloRef,titleRef,descriptionRef,linkRef)

  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} ref={linkRef}>Dina</h1>
        <p className={styles.quote}> "Chaque jour est une opportunite pour grandir et apprendre"</p>
      </div>

    </section>
  );
};
