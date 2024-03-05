import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../compo/Message/Message';
import { addToCart, removeFromCart, clearCart } from '../actions/cartActions';
import './cssy/CartScreen.css';
import AuthContext from '../context/AuthContext';
import * as jwt_decode from 'jwt-decode';
import axios from 'axios';
import swal from 'sweetalert2';
import logo from '../compo/img/logo.png';
import Stopa2 from '../compo/stopa2/Stopa2';
import Stopa from '../compo/stopa/Stopa';

function CartScreen() {
    const token = localStorage.getItem("authTokens");
    const { user ,logoutUser} = useContext(AuthContext);
    const { authTokens } = useContext(AuthContext);

    let decoded;
    if (token) {
        decoded = jwt_decode(token);
    }
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const productId = params.id;
    const qty = location.search ? Number(new URLSearchParams(location.search).get('qty')) : 1;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const authContext = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);
    const [deliveryOption, setDeliveryOption] = useState('pickup'); // Domyślnie ustaw na odbiór osobisty
    const DELIVERY_COST = 20; // Stały koszt dostawy
    const LESS_PRIORITY_DELIVERY_COST = 12; // Koszt mniej priorytetowej dostawy
    const [paymentMethod, setPaymentMethod] = useState('payNow');

    // Dodaj funkcję do zmiany wyboru dostawy
    const handleDeliveryChange = (e) => {
        setDeliveryOption(e.target.value);
    };

    // Funkcja obliczająca całkowitą kwotę z dostawą
    const calculateTotal = () => {
        const itemsTotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
        switch (deliveryOption) {
            case 'delivery':
                return itemsTotal + DELIVERY_COST;
            case 'deliverylesspriority':
                return itemsTotal + LESS_PRIORITY_DELIVERY_COST;
            default:
                return itemsTotal; // Dla odbioru osobistego
        }
    };
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };


    useEffect(() => {
        const checkPaymentSuccess = async () => {
            const sessionId = new URLSearchParams(window.location.search).get('session_id');
            if (sessionId) {
                try {
                    const response = await axios.get(`/api/your-webhook-path`);
                    console.log("Odpowiedź z backendu:", response.data);
                    if (response.data.message === 'Payment successful! Order has been updated.') {
                        dispatch(clearCart());
                        // Dodatkowe działania, np. wyświetlenie powiadomienia o sukcesie
                    } else {
                        // Obsługa nieudanej płatności
                    }
                } catch (error) {
                    console.error('Error checking payment status:', error);
                    // Obsługa błędów
                }
            }
        };
    
        checkPaymentSuccess();
    }, [dispatch]);
    
    const orderItems = cartItems.map(item => ({
        product_id: item._id, // Upewnij się, że używasz właściwego klucza do ID produktu
        product_name: item.name,
        quantity: item.qty,
        price: item.price,
        product_image: item.image,
      }));
      
    const checkoutHandler = async () => {
        if (authContext.user) {
            let deliveryCost;
            switch (deliveryOption) {
                case 'delivery':
                    deliveryCost = DELIVERY_COST;
                    break;
                case 'deliverylesspriority':
                    deliveryCost = LESS_PRIORITY_DELIVERY_COST;
                    break;
                default:
                    deliveryCost = 0; // Dla odbioru osobistego
            }            
            const total_price = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) + deliveryCost;
    
            if (deliveryOption === 'pickup') {
                // Przetwarzanie płatności dla odbioru osobistego
                try {
                    const orderData = {
                        user: user?.id,
                        tax_price: 0,
                        shipping_price: 0, // Użyj pobranej wartości
                        total_price: total_price, // Dodaj koszt dostawy do całkowitej ceny
                        address: "Odbiór",
                        city: "Odbiór",
                        postal_code: "Odbiór",
                        country: "Odbiór",
                        order_items: orderItems,

                    };
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
                            await stripe.redirectToCheckout({ sessionId: data.id });


                        }
                    }
                    else if (paymentMethod === 'payOnDelivery') { 
                        const { data } = await axios.post('/api/order/', orderData, config);

                    }

                } catch (error) {
                    swal.fire('Order Error', error.response?.data?.message || 'Failed to place the order.', 'error');
                }
            } else {
                // Przekierowanie do formularza zamówienia dla opcji dostawy
                navigate(`/complete-order/${decoded.user_id}/?deliveryOption=${deliveryOption}&deliveryCost=${deliveryCost}&paymentMethod=${paymentMethod}`);
            }
        } else {
            setShowModal(true);
        }
    };
    

    const handleCloseModal = () => {
        setShowModal(false); // This should hide the modal when called
    };

    const showLoginOrGuestOptions = () => (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Kontynuuj Zakupy</h5>
                    </div>
                    <div className="modal-body">
                        <p>Chcesz zalogować się?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                            Anuluj
                        </button>
                        {!authContext.user && (
                            <button type="button" className="btn btn-primary" onClick={loginHandler}>
                                Zaloguj Się
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
    
    const loginHandler = () => {
        if (authContext.user) {
            handleCloseModal();

        } else {
            navigate('/login'); // Przekierowanie do strony logowania
        }
    };


    return (
        <div className="my-cart-container1"> 
           <div className='navContainer3'>
                <Link to='/' reloadDocument className='logos2'>
                <img src={logo} alt='logo' className='logo2' />
                </Link>
                <div className='ainv2'>

                {!token ? (
                    <>
                    <Link to='/'><button className='b9'>Strona Główna</button></Link>
                    <Link to='/sklep'><button className='b9'>Sklep</button></Link>
                    <Link to='/login'><button className='b9'>Logowanie</button></Link>
                    <Link to='/rejestracja'><button className='b9'>Rejestracja</button></Link>
                    </>
                ) : (
                    <>
                    <Link to='/'><button className='b9'>Strona Główna</button></Link>
                    <Link to='/sklep'><button className='b9'>Sklep</button></Link>
                    <Link to={`/profile/${decoded.user_id}`}><button className='b9'>Profil</button></Link> 
                    <button onClick={logoutUser} className='b9'>Wyloguj</button>
                    </>
                )}
                </div>
            </div>
            <div className="my-cart-container"> 
            <div className="my-cart-list">
                <h1 className="my-cart-title">Koszyk</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Koszyk jest pusty :( <Link to='/'>Wróć</Link>
                    </Message>
                ) : (
                    <div className="my-cart-items">
                        {cartItems.map(item => (
                            <div key={item.product} className="my-cart-item">
                                <div className="my-cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="my-cart-item-details">
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    <div className="my-cart-item-price">{item.price} PLN</div>
                                    <div className="my-cart-item-quantity">
                                        <select
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="my-cart-item-remove">
                                        <button
                                            type='button'
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            Usuń
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    
            <div className="delivery-options">
                <label>
                    <input 
                        type="radio" 
                        name="deliveryOption" 
                        value="pickup" 
                        checked={deliveryOption === 'pickup'}
                        onChange={handleDeliveryChange} 
                    /> Odbiór Osobisty
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="deliveryOption" 
                        value="delivery" 
                        checked={deliveryOption === 'delivery'}
                        onChange={handleDeliveryChange} 
                    /> Dostawa
                </label>
            </div>
    
            <div className="my-cart-summary">
                <div className="my-cart-summary-inner">
                    <h2>Podsumowanie {cartItems.reduce((acc, item) => acc + item.qty, 0)} produktów</h2>
                    <div className="my-cart-summary-total">
                        Całkowita kwota: {calculateTotal().toFixed(2)} PLN
                        <div className="delivery-cost">
                            {deliveryOption === 'delivery' && (
                                <div>
                                    (w tym dostawa: {DELIVERY_COST.toFixed(2)} PLN)
                                </div>
                            )}
                            {deliveryOption === 'pickup' && (
                                <div>
                                    
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="payment-method-selection">
                        <h3>Metoda płatności:</h3>
                        <div>
                            <input
                                type="radio"
                                id="payNow"
                                name="paymentMethod"
                                value="payNow"
                                checked={paymentMethod === 'payNow'}
                                onChange={() => setPaymentMethod('payNow')}
                            />
                            <label htmlFor="payNow">Zapłać teraz</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="payOnDelivery"
                                name="paymentMethod"
                                value="payOnDelivery"
                                checked={paymentMethod === 'payOnDelivery'}
                                onChange={() => setPaymentMethod('payOnDelivery')}
                            />
                            <label htmlFor="payOnDelivery">Zapłać przy odbiorze</label>
                        </div>
                    </div>
                    <button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Zamów
                    </button>
                </div>
            </div>
            {showModal && showLoginOrGuestOptions()}
            </div>
            <div className='stopa'>
				    <Stopa />
            </div>
            <div className='mapa'></div>
            <div className='stopa2'>
                <Stopa2 />
            </div>
        </div>
    );
}

export default CartScreen;
