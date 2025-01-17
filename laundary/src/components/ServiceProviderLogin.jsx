import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import myImage from './images/file.png';


function ServiceProviderLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display login errors

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and causing a page reload
    try {
      const response = await axios.post(
        "http://localhost:3000/service-provider/login",
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        // Navigate to the service provider's dashboard or home page on successful login
        navigate("/service-provider/secrets");
      } else {
        console.error("Login failed");
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again later.");
    }
  };

  const handleSignUpClick = () => {
    navigate("/service-provider/register"); // Navigate to the SignUp page for service providers
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/service-provider/auth/google";
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-card">
          <div className="login-image">
          <img src={myImage} alt="Your Image" />

          </div>
          <div className="login-form-container">
            <GoogleButton
              type="light"
              label="Continue with Google"
              onClick={handleGoogleLogin}
            />
            <h2>Service Provider Login</h2>
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
                <a href="/spforgotpass">Forgot Password?</a>
              </div>
              <button type="submit">Submit</button>
            </form>
            {error && <div className="error">{error}</div>}
            <div className="login-signup-prompt">
              <p>Are you a new service provider?</p>
              <button className="login-signup-button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderLogin;
