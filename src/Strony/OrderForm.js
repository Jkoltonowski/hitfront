import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AuthContext from '../context/AuthContext';

const OrderForm = () => {
  const { user } = useContext(AuthContext);
  const { cartItems } = useSelector((state) => state.cart);
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: '',
    shippingPrice: 0,
    taxPrice: 0,
  });

  const handleInputChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderItems = cartItems.map(item => ({
      product_name: item.name,
      quantity: item.qty,
      price: item.price,
      image: item.image,
    }));

    const total_price = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) + Number(orderDetails.taxPrice) + Number(orderDetails.shippingPrice);

    const orderData = {
      user: user.id,
      payment_method: orderDetails.paymentMethod,
      tax_price: orderDetails.taxPrice,
      shipping_price: orderDetails.shippingPrice,
      total_price,
      address: orderDetails.address,
      city: orderDetails.city,
      postal_code: orderDetails.postalCode,
      country: orderDetails.country,
      order_items: orderItems,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/order/', orderData);
      console.log(response.data);
      alert('Zamówienie zostało złożone.');
    } catch (error) {
      console.error('Błąd przy składaniu zamówienia:', error);
      alert('Nie udało się złożyć zamówienia.');
    }
  };

  return (
    <div>
      <h1>Formularz Zamówienia</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="address" value={orderDetails.address} onChange={handleInputChange} placeholder="Adres" required />
        <input type="text" name="city" value={orderDetails.city} onChange={handleInputChange} placeholder="Miasto" required />
        <input type="text" name="postalCode" value={orderDetails.postalCode} onChange={handleInputChange} placeholder="Kod pocztowy" required />
        <input type="text" name="country" value={orderDetails.country} onChange={handleInputChange} placeholder="Kraj" required />
        <input type="text" name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleInputChange} placeholder="Metoda płatności" required />
        <input type="number" name="taxPrice" value={orderDetails.taxPrice} onChange={handleInputChange} placeholder="Podatek" min="0" step="0.01" required />
        <input type="number" name="shippingPrice" value={orderDetails.shippingPrice} onChange={handleInputChange} placeholder="Cena dostawy" min="0" step="0.01" required />
        <button type="submit">Złóż Zamówienie</button>
      </form>
    </div>
  );
};

export default OrderForm;
