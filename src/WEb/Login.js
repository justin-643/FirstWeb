import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle login and fetch admin data from Firebase
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make GET request to Firebase to fetch admin data
      const response = await axios.get(
        "https://healthcare-rehab-188e7-default-rtdb.asia-southeast1.firebasedatabase.app/Admin.json"
      );

      const admin = response.data;
      // Check if the username and password match any admin record
      let loginSuccess = false;
      for (const key in admin) {
        if (admin[key].username === username && admin[key].password === password) {
          loginSuccess = true;
          break;
        }
      }

      if (loginSuccess) {
        setMessage("Login successful!");
        setIsAuthenticated(true); // Set the authentication state to true
        navigate("/Admin"); // Navigate to the Admin page
      } else {
        setMessage("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
      setMessage("An error occurred while checking the credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="Login-h2">Login Page</h2>
      <form className="Login-Form" onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            className="Login-I"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="Login-I"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="Login-btn" type="submit">Login</button>
      </form>

      <p className="Login-P">{message}</p>
    </div>
  );
};

export default LoginPage;
