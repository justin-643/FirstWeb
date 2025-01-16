import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import './App.css';

function App() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Screen2`);
  };

  const handleClick2 = () => {
    navigate(`/Screen3`);
  };
  

const [message, setMessage] = useState('');
const [Name, setName] = useState('');
const [Email, setEmail] = useState('');
var form = React.useRef();

  
  const sendemail=(e)=>{

    e.preventDefault();
    alert("submited successfully...")

    emailjs.sendForm('service_qx4zczi','template_fgk5thd',form.current,'NyjBmdui2BVv8OOfJ')
     .then((result)=>{
      console.log(result.text)
     })
     setMessage("");
     setName("");
     setEmail("");

  }

  return (
    <div>
      

      {/* Home Section */}
      <section id="home">
        <div className="hero">
          <h2>Welcome to Our Consultancy</h2>
          <p>Your health is our priority. Get expert consultation from experienced doctors.</p>
          <button onClick={handleClick} className="btn">Book an Appointment</button>
        </div>
      </section>
      <div className="photo-div">
        <img src="https://thenursespeak.com/wp-content/uploads/2016/09/happy-patient.jpg" alt="Error..!!" height="200" width="300" />
        <h2 className="wecare">we care about your health</h2>
        <img src="https://spectrumhealthcare.in/new/images/slider1.jpg" onClick={handleClick} alt="Error..!!" height="200" />

        
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
        <div  onClick={handleClick2} className="container">
          <h2>Our Services</h2>
          <div className="service">
            <h3>General Checkup</h3>
            <p>Comprehensive health checkup to ensure you are in optimal health.</p>
          </div>
          <div className="service">
            <h3>Specialized Consultation</h3>
            <p>Consult with specialists in various fields like cardiology, dermatology, and more.</p>
          </div>
          <div className="service">
            <h3>Emergency Services</h3>
            <p>24/7 emergency services with immediate attention to critical cases.</p>
          </div>
          <div><button className="btn">MORE ABOUT US </button></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container-C" >
          <h2>Contact Us</h2>
          <form action="#" method="POST" onSubmit={sendemail} ref={form} >
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required value={Name}
          onChange={(e) => setName(e.target.value)} /> <br/>

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required value={Email}
          onChange={(e) => setEmail(e.target.value)} /> <br/>

            <label htmlFor="message"  >Message</label>
            <textarea id="message" name="message" rows="4"  required value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea> <br/>

            <button type="submit"  className="btn">Send Message</button>
          </form>
        </div>
      </section>

      
    </div>
  );
}

export default App;
