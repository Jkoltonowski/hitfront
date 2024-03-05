/** @format */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Strony/Home';
import Maszyny from './Strony/Rolnicze';
import MaszynyBud from './Strony/Budowlane';
import Obrotowe from './Strony/Obrotowe';
import Przegubowe from './Strony/Przegubowe';
import Platformy from './Strony/Platformy';
import Widlowe from './Strony/Widlowe';
import Kompaktowe from './Strony/Kompaktowe';
import Navbar from './compo/navbar/Navbar';
import axios from 'axios';
import { UserProvider } from './compo/auth/auth';
import Loginpage from './Strony/Loginpage';
import Registerpage from './Strony/Registerpage';
import { AuthProvider } from './context/AuthContext';
import Shop from './Strony/Shop';
import PrivateRoute from './utils/PrivateRoute';
import Activate from './Strony/Activate';
import ProductScreen from './Strony/ProductScreen';
import CartScreen from './Strony/CartScreen';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store
import GuestCheckout from './Strony/GuestCheckout'
import Checkout from './Strony/Checkout';
import CompleteOrderForm from './Strony/OrderForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import UserProfile from './Strony/UserProfile';
import UserOrders from './Strony/UserOrders';
import UserDashboard from './Strony/UserDashboard';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  
function App() {
	return (
		<Provider store={store}> {/* Dodaj Provider z Redux store */}
		<UserProvider>
		  <BrowserRouter>
			<AuthProvider>
				<Elements stripe={stripePromise}>

					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/maszyny-teleskopowe-rolnicze'
							element={<Maszyny />}
						/>
						<Route
							path='/maszyny-teleskopowe-budowlane'
							element={<MaszynyBud />}
						/>
						<Route
							path='/maszyny-teleskopowe-obrotowe'
							element={<Obrotowe />}
						/>
						<Route
							path='/ladowarki-przegubowe'
							element={<Przegubowe />}
						/>
						<Route
							path='/platformy-robocze'
							element={<Platformy />}
						/>
						<Route
							path='/wozki-widlowe'
							element={<Widlowe />}
						/>
						<Route
							path='/ladowarki-kompaktowe'
							element={<Kompaktowe />}
						/>
						
						<Route
							path='/rejestracja'
							element={<Registerpage />}
						/>
						<Route
							path='/login'
							element={<Loginpage />}
						/>
						<Route
							path='/sklep'
							element={<Shop />}
						/>
						<Route path="/product/:id" element={<ProductScreen />} exact />
						<Route path="/cart/:id?" element={<CartScreen />} exact />
						<Route path="/guest-checkout" element={ < GuestCheckout />} />
						<Route path="/checkout" element={ < Checkout />} />
						<Route path="/cart" element={<CartScreen />} />
       					<Route path="/complete-order/:userId" element={<CompleteOrderForm />} />	
               			<Route path="/activate/:token" component={Activate} />
						<Route path="/profile/:userId" element={<UserDashboard/>} />
						<Route path="/historia-zamowien/:userId" element={<UserOrders/>}/>
						</Routes>
					</Elements>					

					</AuthProvider>
        </BrowserRouter>
      </UserProvider>
    </Provider>
	);
}

export default App;
