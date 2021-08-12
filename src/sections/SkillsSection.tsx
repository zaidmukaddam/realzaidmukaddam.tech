import * as React from "react";
import styles from "css/skills.module.scss";
import { skills } from "../data/skills";
import "devicon";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="section__title">My Backpack</h1>

      <div className={styles.skillsContainer}>
        {skills.map((skillsItem) => {
          return (
            <div key={skillsItem.header} className={styles.skillsItem}>
              <header>
                <h1>{skillsItem.header}</h1>
              </header>

              <ul className={styles.skillsItem}>
                {skillsItem.items.map((item) => (
                  <li key={item}>
                    <i className={item} />
                    <p>{item.split(" ")[2]}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
