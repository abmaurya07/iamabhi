import React from 'react';
import styles from './module.scss'; // Import the module.scss file

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <section className={styles.about}>
      <div className={styles['about__content']}>
        <h2>About Me</h2>
        <p>I'm a passionate web developer with expertise in front-end technologies.</p>
        <div className={styles['about__skills']}>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
