import React from 'react';

const services = [
  {
    id: 1,
    title: 'Emergency Care',
    description: '24/7 emergency services for critical health issues.',
    image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112012/untitled-1_15.png?itok=hjbhP9Ws',
  },
  {
    id: 2,
    title: 'Pediatrics',
    description: 'Comprehensive care for infants, children, and adolescents.',
    image: 'https://le-cdn.website-editor.net/md/and1/dms3rep/multi/opt/13562-1920w.jpeg',
  },
  {
    id: 3,
    title: 'Surgery',
    description: 'Advanced surgical procedures with experienced surgeons.',
    image: 'https://3.bp.blogspot.com/-sE-sP2lAgFs/WT6ij5u4KiI/AAAAAAAAEBc/aZE8TX16TQAreI7OO44Er-LuqwSZBJitACLcB/s1600/day-surgery-procedure.jpg',
  },
  {
    id: 4,
    title: 'Radiology',
    description: 'State-of-the-art imaging services for accurate diagnosis.',
    image: 'https://www.thompsonprecision.co.uk/wp-content/uploads/2015/05/radiotherapy-machine-pre-production-project.jpg',
  },
  {
    id: 5,
    title: 'Cardiology',
    description: 'Expert care for heart-related conditions and diseases.',
    image: 'https://th.bing.com/th/id/OIP.Kc9vk0qaTOD8AZLXl69HHgHaE7?rs=1&pid=ImgDetMain',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;