import React from 'react';
import './About.scss';

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <section className="about">
      <div className="about__content">
        <h2>About Me</h2>
        <p>I'm a passionate web developer with expertise in front-end technologies.</p>
        <div className="about__skills">
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
