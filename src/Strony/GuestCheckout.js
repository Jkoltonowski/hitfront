import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

const GuestCheckout = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

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
    };

    fetch('http://127.0.0.1:8000/api/guest-order/', {
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
      swal.fire({
        title: "Order Placed Successfully",
        icon: "success",
        text: "Thank you for your order!",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 3000,
      });
      // Tutaj możesz wykonać dalsze akcje, jak resetowanie formularza
      // lub przekierowanie do innej strony
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
          <label>Email Address:</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            type="text"
            className="form-control"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            className="form-control"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default GuestCheckout;
