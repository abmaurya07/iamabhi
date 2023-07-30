import React from 'react';
import './Services.scss';

const Services = () => {
  const services = [
    { id: 1, title: 'Web Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Responsive Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'SEO Optimization', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services__list">
        {services.map((service) => (
          <div key={service.id} className="services__item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
