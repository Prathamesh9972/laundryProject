import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CheckoutPage.css';
import Header from './Header';
import Footer from './Footer';

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { providerId, selectedServices } = location.state || {};

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (selectedServices && selectedServices.length > 0) {
      calculateTotalAmount();
    }

    // Fetch user ID from backend when component mounts
    const fetchUserId = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/me', { withCredentials: true });
        setUserId(response.data.id);
      } catch (error) {
        console.error('Failed to fetch user ID:', error);
        setError('Failed to fetch user ID');
      }
    };

    fetchUserId();
  }, [selectedServices]);

  const calculateTotalAmount = () => {
    let total = 0;
    selectedServices.forEach(service => {
      const quantity = service.quantity || 0;
      const price = parseFloat(service.price) || 0;
      total += quantity * price;
    });
    setTotalAmount(total);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmOrder = async () => {
    if (!userId) {
      setError('User not logged in');
      return;
    }

    try {
      const { name, email, phone, address } = customerDetails;

      // Create order
      const response = await axios.post('http://localhost:3000/api/create-checkout', {
      userId,
      customerDetails,
      providerId,
      pickupTime,
      dropoffTime,
      selectedServices,
      totalAmount
    });

    window.location.href = response.data.checkoutUrl;
  } catch (err) {
    console.error(err);
    setError("Checkout initialization failed");
  }
  };

  return (
    <div>
      <Header
      text={" Checkout"}
      />
    <div className="checkout-container">
      <h2>Checkout</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="customer-details">
        <h3>Customer Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={customerDetails.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customerDetails.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={customerDetails.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={customerDetails.address}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="pickupTime"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />
        <input
          type="datetime-local"
          name="dropoffTime"
          value={dropoffTime}
          onChange={(e) => setDropoffTime(e.target.value)}
        />
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="services-list">
          {selectedServices.length > 0 ? (
            selectedServices.map((service, index) => {
              const price = parseFloat(service.price);
              const formattedPrice = isNaN(price) ? 'N/A' : price.toFixed(2);

              return (
                <div key={index} className="service-card">
                  <p><strong>Service ID:</strong> {service.serviceName}</p>
                  <p><strong>Quantity:</strong> {service.quantity}</p>
                  <p><strong>Price:</strong> Rs.{formattedPrice}</p>
                </div>
              );
            })
          ) : (
            <p>No services selected.</p>
          )}
        </div>
        <h4>Total Amount: Rs.{totalAmount.toFixed(2)}</h4>
      </div>
      <button className="confirm-button" onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
    <Footer/>
    </div>
  );
}

export default CheckoutPage;
