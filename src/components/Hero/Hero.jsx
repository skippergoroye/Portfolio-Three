import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CV from "../../../assets/cv/Oluwatosin Adegoroye 5.0.pdf"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Oluwatosin</h1>
        <p className={styles.description}>
          I'm a Frontend developer with 3 years of experience using React, ReactNative, NextJS and
          Node. Reach out if you'd like to learn more!
        </p>
        <div className="flex gap-6">
        <a  href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a  href={CV} download className={`bg-[#e3b957] ${styles.contactBtn}`}>
          Download CV
        </a>

        </div>
       
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
