import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const UserUpdate = () => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch userId from local storage (Assuming it's stored after login)
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage({ type: "error", text: "User not logged in. Please log in first!" });
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage({ type: "error", text: "User ID not found. Please log in again!" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/update-user", {
        userId,
        phone,
        address,
      });

      setMessage({ type: "success", text: response.data.message });
      setPhone("");
      setAddress("");
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update details. Try again!" });
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
          <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            Update Your Details
          </Typography>

          {message.text && (
            <Alert severity={message.type} sx={{ mb: 2 }}>
              {message.text}
            </Alert>
          )}

          <form onSubmit={handleUpdate}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update Details
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default UserUpdate;
