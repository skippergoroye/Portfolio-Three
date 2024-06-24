import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 className="mb-3">
                Frontend Developer <span className="ml-2"> (ReactJS)</span>
              </h3>
              <p className="text-blue-400">
                I'm a frontend developer with 3 years of experience creating
                engaging and intuitive user experiences. With expertise in HTML,
                CSS, JavaScript, and frameworks like React and Next.js, I
                transform ideas into seamless, responsive web applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className="mb-3">
                Mobile Developer <span className="ml-2"> (React Native)</span>
              </h3>
              <p className="text-blue-400">
                I have experience in building dynamic and user-friendly mobile
                applications. Using React Native, I create seamless apps that
                perform beautifully on both iOS and Android platforms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className="mb-3">
                Backend Developer <span className="ml-2"> (NodeJS)</span>
              </h3>
              <p className="text-blue-400">
                Backend developer specializing in
                Node.js, Express, and NestJS. I focus
                on building scalable server-side applications, designing robust
                APIs, and optimizing database performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
