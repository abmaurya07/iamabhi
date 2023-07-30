import React from 'react';
import styles from './module.scss'; // Import the module.scss file

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, title: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Project B', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Project C', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles['portfolio__grid']}>
        {portfolioItems.map((item) => (
          <div key={item.id} className={styles['portfolio__item']}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
