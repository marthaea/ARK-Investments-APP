import React, { useState, useEffect } from "react";
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const testimonials = [
  {
    image: "/images/client1.jpeg",
    name: "Edward Ssenyonyi",
    testimonial: "ARK Investments helped me find the perfect home! Their service is unparalleled.",
  },
  {
    image: "/images/client2.jpeg",
    name: "Emily Mwine",
    testimonial: "I can't thank ARK Investments enough for making my dream of owning a home come true.",
  },
  {
    image: "/images/client3.jpeg",
    name: "Racheal Atwiine",
    testimonial: "The team at ARK Investments is knowledgeable, professional, and very helpful.",
  },
  {
    image: "/images/client5.jpeg",
    name: "Moses Mayanja",
    testimonial: "Highly recommend ARK Investments for real estate solutions.",
    
  },
];

const teamMembers = [
  {
    image: "/images/team1.jpeg",
    name: "Morgan Owanyi",
    role: "CEO",
    bio: "Morgan is the driving force behind ARK Investments, with over 10 years of experience in the real estate industry.",
    socialMedia: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        facebook: "https://facebook.com/johnsmith",
      },
  },
  {
    image: "/images/team4.jpg",
    name: "Martha Praise Katusiime",
    role: "Marketing Director",
    bio: "Martha is passionate about connecting people with their dream properties through innovative marketing strategies.",
    socialMedia: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        facebook: "https://facebook.com/johnsmith",
      },
  },
  {
    image: "/images/team6.jpg",
    name: "Timothy Mwesigye",
    role: "Operations Manager",
    bio: "Timothy ensures that everything runs smoothly, from client onboarding to property management.",
    socialMedia: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        facebook: "https://facebook.com/johnsmith",
      },
  },
];



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div >
        <h1>Welcome to ARK Investments</h1>
        <p>Your trusted real estate partner for finding dream homes and investment opportunities.</p>
       
        <button className="cta-btn">Explore Properties</button>
        </div>
      </section>

      {/* About the Company Section */}
    <section className="map">
        <h2 className="discover-text">Discover places you can buy or hire!</h2>
         <p className="discoverp">Places shown on the map below indicate some of the places assorciated with Ark Investments</p>
        <iframe
           src="https://www.google.com/maps/d/u/0/embed?mid=1h4JGgIk-ZNJZiSWEQEClXJCOA9EQwtY&ehbc=2E312F&noprof=1"
           width="100%"
           height="500px"
           title="Map of Uganda"
           style={{ border: '0' }}  
           allowfullscreen=""
           loading="lazy">
        </iframe>
    </section>

   
 


      {/* Services Section */}
      <section className="services">
       <h2>Our Services</h2>
       <div className="services-container">
        <div className="service">
          <i className="fas fa-home service-icon"></i> {/* FontAwesome icon */}
          <h3>Buy Properties</h3>
          <p>We help you find the best properties to buy in prime locations.</p>
        </div>
        <div className="service">
          <i className="fas fa-sign"></i> {/* FontAwesome icon */}
          <h3>Sell Properties</h3>
          <p>We assist you in selling properties quickly at the best prices.</p>
        </div>
    <div className="service">
      <i className="fas fa-building"></i> {/* FontAwesome icon */}
      <h3>Rent Properties</h3>
      <p>Looking for a place to rent? We have several options for you.</p>
    </div>
  </div>
</section>


      {/* Meet the Team Section */}
      <section className="team">
  <h2>Meet Our Team</h2>
  <div className="team-container">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-member-card">
        <img src={member.image} alt={member.name} className="team-member-photo" />
        <div className="team-member-info">
          <h3>{member.name}</h3>
          <p className="team-member-role">{member.role}</p>
          <p className="team-member-bio">{member.bio || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
          <div className="team-member-links">
            {member.socialMedia.linkedin && (
              <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {member.socialMedia.twitter && (
              <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {member.socialMedia.facebook && (
              <a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            <p>"{testimonials[currentIndex].testimonial}"</p>
            <p className="testimonial-name">- {testimonials[currentIndex].name}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Ready to explore your real estate options? Contact us today to get started.</p>
        <button className="cta-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
