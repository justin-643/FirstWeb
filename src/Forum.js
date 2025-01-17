import React, { useState } from "react";
import emailjs from "emailjs-com";
import './App.css'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.appointmentDate ||
      !formData.time ||
      !formData.message
    ) {
      setError("Please fill out all fields.");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      appointmentDate: formData.appointmentDate,
      time: formData.time,
      message: formData.message,
    };

    emailjs
      .send("service_qx4zczi", "template_qc3pqg9", templateParams, "NyjBmdui2BVv8OOfJ")
      .then(
        (response) => {
          console.log("Appointment request sent", response);
          setIsSubmitted(true);
          setError("");
        },
        (error) => {
          console.log("Failed to send appointment request", error);
          setError("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="Appointment-form">
      <h2>Book an Appointment</h2>

      {isSubmitted ? (
        <div>
          <p>Your appointment request has been submitted successfully. We will contact you shortly!</p>
        </div>
      ) : (
        <form className="Fields" onSubmit={handleSubmit}>
          <div >
            <label>Name:</label>
            <input
              type="text"
              className="Name-f"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>  

          <div>
            <label>Email:</label>
            <input
              type="email"
              className="Name-f"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div> 

          <div>
            <label>Phone:</label>
            <input
              type="tel"
              className="Name-f"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div> 

          <div>
            <label>Appointment Date:</label>
            <input
              type="date"
              className="Name-f"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
            />
          </div>  

          <div>
            <label>Appointment Time:</label>
            <input
              type="time"
              className="Name-f"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>  

          <div>
            <label>Message:</label>
            <textarea
              name="message"
              className="Name-f"
              value={formData.message}
              onChange={handleChange}
            />
          </div> <br/>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="btn" type="submit">Submit Appointment</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
