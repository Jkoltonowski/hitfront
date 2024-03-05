import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

const GuestCheckout = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleStripePayment = async (sessionId) => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.error('Error redirecting to Stripe checkout:', error);
      // Dodaj obsługę błędu, np. wyświetlenie komunikatu użytkownikowi
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      email,
      name,
      last_name: lastName, // Użyj snake_case jak w Django
      address,
      city,
      postal_code: postalCode, // Użyj snake_case jak w Django
      country,
      order_items: cartItems.map(item => ({
        product_name: item.name,
        quantity: item.qty,
        price: item.price,
        image: item.image,
      })),
    };

    fetch('http://localhost:8000/api/order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // Jeśli serwer zwraca odpowiedź inna niż "ok", to rzucamy błąd
        return response.json().then((data) => {
          throw new Error(data.detail || 'Error');
        });
      }
    })
    .then((data) => {

      

      // Po złożeniu zamówienia, przekieruj do płatności Stripe
      handleStripePayment(data.id);
    })
    .catch((error) => {
      console.error('Error:', error);
      swal.fire({
        title: "Error",
        icon: "error",
        text: `There was an issue placing your order: ${error.message}`,
        showConfirmButton: true,
      });
    });
  };

  return (
    <div className="guest-checkout">
      <h2>Guest Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Imię:</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nazwisko:</label>
          <input
            type="text"
            className="form-control"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Ulica:</label>
          <input
            type="text"
            className="form-control"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Miasto:</label>
          <input
            type="text"
            className="form-control"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Kod Pocztowy:</label>
          <input
            type="text"
            className="form-control"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Kraj:</label>
          <input
            type="text"
            className="form-control"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Zamów
        </button>
      </form>
      <Link to="/cart">Powrót</Link>
    </div>
  );
};

export default GuestCheckout;
