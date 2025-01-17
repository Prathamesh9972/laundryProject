import React, { useState } from "react";
import axios from "axios";
import myImage from './images/laundaryimg3.jpg';
import { getPreciseDistance } from 'geolib'; // Example usage of geolib

function RegisterServiceProvider() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const sendOtp = () => {
    axios
      .post(
        "http://localhost:3000/service-provider/send-otp",
        { email },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("OTP sent:", response.data);
        setOtpSent(true);
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        setError("Failed to send OTP. Please try again.");
      });
  };

  const verifyOtp = () => {
    axios
      .post(
        "http://localhost:3000/service-provider/verify-otp",
        { email, otp },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("OTP verified:", response.data);
        setOtpVerified(true);
        getCurrentLocation(); // Get location once OTP is verified
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setError("Failed to verify OTP. Please try again.");
      });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toPrecision(5));
          setLongitude(position.coords.longitude.toPrecision(5));
          console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Failed to get location. Please try again.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setError("Please verify your email first.");
      return;
    }
    axios
      .post(
        "http://localhost:3000/service-provider/register",
        { username: email, password, name, address, latitude, longitude },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Registration successful:", response.data);
        window.location.href = "/service-provider/login";
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-card">
          <div className="login-form-container">
            <h2>Sign Up as a Service Provider</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button" onClick={sendOtp}>
                Send OTP
              </button>
              {otpSent && (
                <>
                  <input
                    type="text"
                    value={otp}
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button type="button" onClick={verifyOtp}>
                    Verify OTP
                  </button>
                </>
              )}
              {otpVerified && (
                <>
                  <input
                    type="password"
                    value={password}
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter your Laundry Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={address}
                    placeholder="Enter your Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <button type="submit">Sign Up</button>
                </>
              )}
            </form>
            {error && <div className="error">{error}</div>}
          </div>

          <div className="login-image">
            <img src={myImage} alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterServiceProvider;
