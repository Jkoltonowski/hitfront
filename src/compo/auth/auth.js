import React, { useState, createContext } from 'react';
import axios from 'axios';

// ... other imports

// Create an Axios client
const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true, // Moved this here for simplicity
});

// Create the UserContext
export const UserContext = createContext(null);

// Define your functions here
export const updateFormBtn = (registrationToggle, setRegistrationToggle) => {
  const buttonElement = document.getElementById("form_btn");
  if (buttonElement) {
    buttonElement.innerHTML = registrationToggle ? "Log in" : "Register";
    setRegistrationToggle(!registrationToggle);
  }
};

export const submitRegistration = async (e, email, username, password, setCurrentUser) => {
  e.preventDefault();
  try {
    await client.post("/api/register", { email, username, password });
    await client.post("/api/login", { email, password });
    setCurrentUser(true);
  } catch (error) {
    console.error('Registration or login failed:', error);
  }
};

export const submitLogin = async (e, email, password, setCurrentUser) => {
  e.preventDefault();
  try {
    await client.post("/api/login", { email, password });
    setCurrentUser(true);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const submitLogout = async (e, setCurrentUser) => {
  e.preventDefault();
  try {
    await client.post("/api/logout");
    setCurrentUser(false);
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

// Component that provides the context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Wrap the functions with another function to prevent the creation of new functions on every render
  const handleRegistration = (e) => submitRegistration(e, email, username, password, setCurrentUser);
  const handleLogin = (e) => submitLogin(e, email, password, setCurrentUser);
  const handleLogout = (e) => submitLogout(e, setCurrentUser);
  const handleToggle = () => updateFormBtn(registrationToggle, setRegistrationToggle);

  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      registrationToggle,
      setRegistrationToggle,
      email,
      setEmail,
      username,
      setUsername,
      password,
      setPassword,
      handleRegistration,
      handleLogin,
      handleLogout,
      handleToggle
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within a UserProvider');
  }
  return context;
};
