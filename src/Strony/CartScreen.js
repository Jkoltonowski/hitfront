import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, Modal } from 'react-bootstrap';
import Message from '../compo/Message/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';
import './cssy/CartScreen.css';
import AuthContext from '../context/AuthContext';

function CartScreen() {
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

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        if (authContext.user) {
            // Użytkownik jest zalogowany, przejdź do /checkout
            navigate('/complete-order');
        } else {
            setShowModal(true); // Pokaż modalne okno z opcjami
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const showLoginOrGuestOptions = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Kontynuuj Zakupy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Chcesz kontynuować jako gość?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Anuluj
                </Button>
                <Button variant="primary" onClick={continueAsGuestHandler}>
                    Kontynuuj jako Gość
                </Button>
                {!authContext.user && (
                    <Button variant="primary" onClick={loginHandler}>
                        Zaloguj Się
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
    
    const loginHandler = () => {
        handleCloseModal();
        if (userInfo || authContext.user) {
            // Użytkownik jest zalogowany, przejdź bezpośrednio do kasy
            navigate('/checkout');
        } else {
            navigate('/login'); // Przekierowanie do strony logowania
        }
    };

    const continueAsGuestHandler = () => {
        handleCloseModal();
        navigate('/guest-checkout'); // Przekierowanie do procesu checkout jako gość
    };

    return (
        <>
            <Row className="my-cart-container">
                <Col md={8} className="my-cart-list">
                    <h1 className="my-cart-title">Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Message variant='info'>
                            Your cart is empty <Link to='/'>Go Back</Link>
                        </Message>
                    ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product} className="my-cart-item">
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={5}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={1}>
                                            ${item.price}
                                        </Col>
                                        <Col md={1}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                style={{ width: '60px' }}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4} className="my-cart-summary">
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cartItems.length === 0}
                                    onClick={checkoutHandler}
                                >
                                    Proceed To Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            {showLoginOrGuestOptions()}
        </>
    );
}

export default CartScreen;
