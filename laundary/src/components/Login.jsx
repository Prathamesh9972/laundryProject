import React, { useState } from "react";
import axios from "axios";
import Register from "./Register";
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import "./Login.css";
import UserForgotpass from "./UserForgotpass";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        // Redirect to the secrets page on successful login
        window.location.href = "/secrets";
      } else {
        alert(" Login Failed Please Check Username or Password");
        console.error("Login failed");
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      alert(" Login Failed Please Check Username or Password");
      console.error("Error logging in:", error);
      // Handle error (e.g., show error message)
    }
  };

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
      navigate('/register'); // Navigate to the SignUp page
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="login-body">
     
      <div className="login-container">
        <div className="login-card">
          <div className="login-image">
            <img src="images/laundaryimg.webp" alt="Laundry illustration" />
          </div>
          <div className="login-form-container">
            <GoogleButton type="light" label='Continue with Google' onClick={handleGoogleLogin} />
            <h2>Log In for Our Service</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="login-forgot-password">
                <a href="/forgotpass">Forgot Password?</a>
              </div>
              <button type="submit">Submit</button>
            </form>
            <div className="login-signup-prompt">
              <p>Are you a new user?</p>
              <button className="login-signup-button" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;