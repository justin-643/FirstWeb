import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      
      <div>
      
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Committed to providing quality healthcare services to our community.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><strong>Address:</strong> Healthcarephysiorehab, NIzamabad, Telangana</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> Healthcarephysiorehab@hospital.com</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#Appointment">Appointments</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <li><a href="#Contact">Patient Portal</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/mr_justin_643/" className="social-icon">Facebook</a>
                        <a href="https://www.instagram.com/mr_justin_643/" className="social-icon">Twitter</a>
                        <a href="https://www.instagram.com/mr_justin_643/" className="social-icon">Instagram</a>
                        <a href="https://www.instagram.com/mr_justin_643/" className="social-icon">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy;2025 Healthcarephysiorehab. All rights reserved.</p>
            </div>
        </footer>
      </div>
    </div>
  
  )
}

export default Footer
