import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import swal from 'sweetalert2';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import AuthContext from '../context/AuthContext';
import './cssy/checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { cartItems } = useSelector((state) => state.cart);
  const stripe = useStripe();
  const elements = useElements();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      swal.fire('Error', 'Stripe has not loaded yet. Please try again later.', 'error');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      swal.fire('Error', error.message, 'error');
      return;
    }

    const orderData = {
      user: user?.id,
      address,
      city,
      postalCode,
      country,
      paymentMethodId: paymentMethod.id,
      orderItems: cartItems.map(item => ({
        product_name: item.name,
        quantity: item.qty,
        price: item.price,
      })),
    };

    try {
      const response = await axios.post('/api/order/', orderData);
      if (response.status === 201) {
        swal.fire('Success', 'Your order has been placed!', 'success');
        navigate('/order-success');
      }
    } catch (err) {
      swal.fire('Error', 'There was an error processing your order.', 'error');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
        : (
        <form className="checkout-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              required
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              required
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              required
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              required
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <CardElement />
          <button className="checkout-button" type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      )
    </div>
  );
};

export default Checkout;
