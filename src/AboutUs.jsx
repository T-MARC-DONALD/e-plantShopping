import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#065f46' }}>
        About Paradise Nursery
      </h1>
      
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#374151' }}>
          Welcome to Paradise Nursery, your premier destination for beautiful houseplants. 
          Founded in 2020, we began as a small family-owned greenhouse with a simple mission: 
          to bring the beauty and benefits of nature into every home.
        </p>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#374151' }}>
          Our passion for plants started over 20 years ago when our founder, Sarah Johnson, 
          discovered the transformative power of indoor gardening. What began as a hobby 
          quickly grew into a calling as we witnessed how plants could brighten spaces, 
          improve air quality, and bring joy to people's lives.
        </p>
        
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#065f46' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#374151' }}>
          At Paradise Nursery, we believe that everyone deserves to experience the joy of 
          nurturing plants. We carefully source and cultivate each plant in our collection, 
          ensuring that only the healthiest and most beautiful specimens make it to your home. 
          Our expert horticulturists hand-select each plant for its quality, resilience, and aesthetic appeal.
        </p>
        
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#065f46' }}>
          What Sets Us Apart
        </h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#374151', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Quality guarantee on all plants</li>
          <li style={{ marginBottom: '0.5rem' }}>Expert care instructions with every purchase</li>
          <li style={{ marginBottom: '0.5rem' }}>Sustainable growing practices</li>
          <li style={{ marginBottom: '0.5rem' }}>Community workshops and plant care classes</li>
          <li style={{ marginBottom: '0.5rem' }}>30-day plant health guarantee</li>
        </ul>
        
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#065f46' }}>
          Our Commitment
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#374151' }}>
          We're committed to making plant ownership accessible to everyone, from seasoned 
          gardeners to beginners taking their first step into the world of indoor plants. 
          Whether you're looking for low-maintenance succulents, air-purifying foliage, 
          or statement tropical plants, our curated collection has something perfect for your space.
        </p>
        
        <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '2px solid #10b981' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#065f46', textAlign: 'center', margin: 0 }}>
            "Bringing nature indoors, one plant at a time."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
