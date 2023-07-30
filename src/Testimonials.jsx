import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    { id: 1, quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'John Doe' },
    { id: 2, quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Jane Smith' },
    { id: 3, quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Bob Johnson' },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials__list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonials__item">
            <blockquote>{testimonial.quote}</blockquote>
            <cite>{testimonial.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
