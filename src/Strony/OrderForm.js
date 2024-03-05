import React, { useState, useContext,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AuthContext from '../context/AuthContext';
import swal from 'sweetalert2';
import { useParams,useLocation  } from 'react-router-dom';
import './cssy/orderForm.css';
import { addToCart, removeFromCart, clearCart} from '../actions/cartActions';
import { useDispatch } from 'react-redux';


const OrderForm = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { cartItems } = useSelector((state) => state.cart);
  const { authTokens } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState('');

  const { userId } = useParams();
    const dispatch = useDispatch();

  const [orderDetails, setOrderDetails] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const queryParams = new URLSearchParams(location.search);
  const deliveryCost = parseFloat(queryParams.get('deliveryCost') || 0);
  useEffect(() => {
    const method = queryParams.get('paymentMethod');
    if (method) {
        setPaymentMethod(method);
    }
}, [queryParams]);
  useEffect(() => {

    const fetchUserData = async () => {
      if (!authTokens) {
        // Przekieruj do strony logowania lub obsłuż brak tokena
        return;
      }
      try {
        const result = await axios.get(`/api/user/profile/${userId}/`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        });
        setOrderDetails({
          address: result.data.address || '',
          city: result.data.city || '',
          postalCode: result.data.postalCode || '',
          country: result.data.country || '',
        });
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, [userId, authTokens, location.search]);
  const handleInputChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Sprawdź, czy wszystkie pola zostały wypełnione
    if (!orderDetails.address || !orderDetails.city || !orderDetails.postalCode || !orderDetails.country) {
      swal.fire('Brakujące informacje', 'Proszę wprowadzić dane.', 'warning');
      return;
    }
  
    const total_price = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    const orderItems = cartItems.map(item => ({
      product_name: item.name,
      quantity: item.qty,
      price: item.price,
    }));
  
    const orderData = {
      user: user?.id,
      tax_price: 0,
      shipping_price: deliveryCost, // Użyj pobranej wartości
      total_price: total_price, // Dodaj koszt dostawy do całkowitej ceny
      address: orderDetails.address,
      city: orderDetails.city,
      postal_code: orderDetails.postalCode,
      country: orderDetails.country,
      order_items: orderItems,
    };

  
    try {

      // Dodaj token JWT do nagłówków żądania
      const config = {
        headers: {
           Authorization: `Bearer ${authTokens.access}`,
        },
      };

      if (paymentMethod === 'payNow') {
        const { data } = await axios.post('/api/order/', orderData, config);

        if (data && data.id) {
          dispatch(clearCart()); 
          const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
          await stripe.redirectToCheckout({
            sessionId: data.id,
          });
        } else if (paymentMethod === 'payOnDelivery') {
          const { data } = await axios.post('/api/order/', orderData, config);
        }

      } else {
        // Handle error here, for example, data doesn't contain a session ID
        swal.fire('Order Error', 'Failed to initiate Stripe checkout.', 'error');
      }

    } catch (error) {
      // Handle error here, for example, show error message to user
      swal.fire('Order Error', error.response?.data?.message || 'Failed to place the order.', 'error');
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prevState => ({ ...prevState, [name]: value }));
  };
  const handlebutton = (e) => {
    cartItems.forEach(item => {
      dispatch(removeFromCart(item.product));
    });
  }
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

    return (
      <div className="order-form-container">
          <h1 className="order-form-header">Formularz Zamówienia</h1>
          <form onSubmit={handleSubmit} className="order-form">
              <input
                  type="text"
                  name="address"
                  className="order-form-input"
                  value={orderDetails.address}
                  onChange={handleChange}
                  placeholder="Adres"
                  required
              />
              <input
                  type="text"
                  name="city"
                  className="order-form-input"
                  value={orderDetails.city}
                  onChange={handleChange}
                  placeholder="Miasto"
                  required
              />
              <input
                  type="text"
                  name="postalCode"
                  className="order-form-input"
                  value={orderDetails.postalCode}
                  onChange={handleChange}
                  placeholder="Kod pocztowy"
                  required
              />
              <input
                  type="text"
                  name="country"
                  className="order-form-input"
                  value={orderDetails.country}
                  onChange={handleChange}
                  placeholder="Kraj"
                  required
              />
              <div className='metplatnosc'>
                <h3>Metoda płatności : {paymentMethod === 'payNow' ? 'Zapłać teraz' : 'Przy odbiorze'}</h3>
              </div>
              <button type="submit"  className="order-form-submit">Złóż Zamówienie</button>

          </form>
      </div>
  );
  
};

export default OrderForm;
