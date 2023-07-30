import React from 'react';
import styles from './module.scss'; // Import the module.scss file

const Testimonials = () => {
  const testimonials = [
    { id: 1, quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'John Doe' },
    { id: 2, quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Jane Smith' },
    { id: 3, quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Bob Johnson' },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles['testimonials__list']}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles['testimonials__item']}>
            <blockquote>{testimonial.quote}</blockquote>
            <cite>{testimonial.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
