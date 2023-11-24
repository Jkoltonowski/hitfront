import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  
  // Zdefiniuj zmienną orderData przed jej użyciem
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (!authContext.user) {
      navigate('/login');
    } else {
      setAddress(cart.shippingAddress?.address || '');
      setCity(cart.shippingAddress?.city || '');
      setPostalCode(cart.shippingAddress?.postalCode || '');
      setCountry(cart.shippingAddress?.country || '');
    }
  }, [authContext.user, navigate, cart.shippingAddress]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!address || !city || !postalCode || !country) {
      swal.fire('Error', 'Please fill in all fields to proceed.', 'error');
      return;
    }

    const newOrderData = {
      paymentMethod: 'PayPal',
      shippingAddress: {
        address,
        city,
        postalCode,
        country,
      },
      orderItems: cartItems.map((item) => ({
        product: item.product,
        qty: item.qty,
      })),
      user: authContext.user?.id,
    };

    try {
      const { data } = await axios.post('api/checkout/', newOrderData);

      dispatch({ type: 'ORDER_CREATE_SUCCESS', payload: data });
      dispatch({ type: 'CART_CLEAR_ITEMS' });

      // Zaktualizuj zmienną orderData po utworzeniu zamówienia
      setOrderData(data);
      setShowOrderSummary(true);
    } catch (error) {
      dispatch({
        type: 'ORDER_CREATE_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
        : (
        <form onSubmit={submitHandler}>
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
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </form>
      )
    </div>
  );
};

export default Checkout;
