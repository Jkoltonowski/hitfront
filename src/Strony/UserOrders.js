import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './cssy/userOrders.css';
import Navbar3 from '../compo/navbar3/navbar3';
import * as jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import Stopa2 from '../compo/stopa2/Stopa2';
import Stopa from '../compo/stopa/Stopa';
const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const { authTokens } = useContext(AuthContext);
    const { userId } = useParams();
    const { user, logoutUser } = useContext(AuthContext);
    const token = localStorage.getItem("authTokens");
    let decoded;
    if (token) {
      decoded = jwt_decode(token);
    }
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`/api/user/orders/${userId}/`, {
                    headers: {
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Wystąpił błąd przy pobieraniu zamówień', error);
                alert('Nie udało się pobrać historii zamówień.');
            }
        };

        fetchOrders();
    }, [userId, authTokens]);

    return (
        <div className='allOrders'>
            <Navbar3/>

            <div className="user-orders-container">
                <h2>Historia Zamówień</h2>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div className="order-card" key={order.id}>
                            <h3>Zamówienie #{order.id}</h3>
                            <p>Status: {order.is_paid ? 'Opłacone' : 'Nieopłacone'}, Status zamówienia: {order.status}</p>
                            <ul className="order-item-list">
                                {order.order_items.map(item => (
                                    <li className="order-item" key={item.id}>
                                        <img src={item.image} alt={item.product_name} />
                                        <div className="order-item-details">
                                            {item.quantity} x {item.product_name} - {item.price * item.quantity}   zł
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    ))
                ) : (
                    <p>Brak zamówień do wyświetlenia.</p>
                )}
            <Link to={`/profile/${decoded.user_id}`}><button className='b9'>Wróć</button></Link>

            </div>

            <div className='stopa'>
                <Stopa />
            </div>
            <div className='stopa2'>
               <Stopa2 />
            </div>
        </div>
    );
};
export default UserOrders;
