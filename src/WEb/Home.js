import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { database, ref, set } from './firebase-config.js'; // import Firebase config
import '../App.css';

function App() {
  // Import images
  const image = require(`../Media/${"happy-patient.jpg"}`);
  const image1 = require(`../Media/${"slider1.jpg"}`);
  const image2 = require(`../Media/${"sports.jpg"}`);
  const image3 = require(`../Media/${"physical.jpg"}`);
  const image4 = require(`../Media/${"Chiropractor.jpg"}`);
  const image5 = require(`../Media/${"Osteopath.jpg"}`);

  const navigate = useNavigate();

  // Handler for navigating to Screen2
  const handleClick = () => {
    navigate(`/Screen2`);
  };

  // Form state
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission and save data to Firebase
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior

    const patientData = {
      name,
      email,
      message,
      timestamp: Date.now(),
    };

    // Save data to Firebase Realtime Database
    set(ref(database, 'Feedback/' + Date.now()), patientData)
      .then(() => {
        alert("Data submitted successfully!");
        // Reset form data
        setMessage("");
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error writing to Firebase:", error);
      });
  };

  return (
    <div>
      {/* Home Section */}
      <section id="home">
        <div className="hero">
          <h2>Welcome to Our healthcare</h2>
          <p>Your health is our priority. Get expert consultation from experienced doctors.</p>
          <button onClick={handleClick} className="btn">Book an Appointment</button>
        </div>
      </section>

      <div className="photo-div">
        <img src={image} alt="Happy Patient" height="200" width="300" />
        <h2 className="wecare">We care about your health</h2>
        <img src={image1} onClick={handleClick} alt="Slider" height="200" />
      </div>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>We provide expert medical consultation across a variety of specializations. Our team of highly qualified doctors is committed to offering you the best healthcare services with a personal touch.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service">
            <img src={image2} alt="Sports Physical Therapist" />
            <h3>Sports Physical Therapist</h3>
            <p>Specialized treatment for sports-related injuries and recovery plans.</p>
          </div>
          <div className="service">
            <img src={image3} alt="Orthopaedic Physical Therapist" />
            <h3>Orthopaedic Physical Therapist</h3>
            <p>Rehabilitation services for bone, joint, and soft tissue injuries.</p>
          </div>
          <div className="service">
            <img src={image4} alt="Chiropractor" />
            <h3>Chiropractor</h3>
            <p>Focus on spinal health and treatments to relieve pain and improve function.</p>
          </div>
          <div className="service">
            <img src={image5} alt="Osteopath" />
            <h3>Osteopath</h3>
            <p>Holistic treatment focusing on muscle and skeletal health to alleviate pain.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="Contact" id="contact">
        <div className="container-C">
          

          {/* Contact Form */}
          <form  className="Form-C"onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <h3>We Value Your Feedback</h3>
            <div>
              <label htmlFor="name">Name</label>
              <input
              
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div> <br/>
            <button type="submit" className="btn">Submit</button>
          </form>

          {/* Map */}
          <div style={{ width: '70%', height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.775857463845!2d78.09921252510104!3d18.674051564468197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcddb2fa16cd131%3A0xef17c51299f4211e!2sKhaleelwadi%2C%20Nizamabad%2C%20Telangana%20503001!5e0!3m2!1sen!2sin!4v1737438298862!5m2!1sen!2sin"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
