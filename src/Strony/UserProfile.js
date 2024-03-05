import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './cssy/userProfile.css';
import Navbar3 from '../compo/navbar3/navbar3';

const UserProfile = () => {
    const { authTokens } = useContext(AuthContext);
    const { userId } = useParams();
    const [userData, setUserData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
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
                setUserData(result.data);
            } catch (error) {
                console.error('Wystąpił błąd przy pobieraniu danych profilu', error);
            }
        };
      
        fetchData();
    }, [userId, authTokens]);
      
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    };
    
    const handleEdit = () => {
        setEditMode(true);
    };
    
    const handleSave = async (e) => {
        e.preventDefault();
        if (editMode) { // Dodaj kontrolę, czy jesteśmy w trybie edycji
            try {
                const response = await axios.put(`/api/user/update/${userId}/`, userData, {
                    headers: {
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                });
                alert('Profil zaktualizowany!');
                setEditMode(false);
            } catch (error) {
                console.error('Wystąpił błąd przy aktualizacji profilu', error);
                alert('Nie udało się zaktualizować profilu.');
            }
        }
    };
    return (
        <div className='allwithnav'>
            <Navbar3/>
            <div className="user-profile-container">
             <h1 className="user-profile-header">Profil Użytkownika</h1>
                <form className="user-profile-form">
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control"
                            value={userData.email} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    <label>
                        Imie:
                        <input 
                            type="text" 
                            name="first_name"  
                            className="form-control"
                            value={userData.first_name} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    <label>
                        Nazwisko:
                        <input 
                            type="text" 
                            name="last_name" 
                            className="form-control"
                            value={userData.last_name} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    <label>
                        Ulica:
                        <input 
                            type="text" 
                            name="address" 
                            className="form-control"
                            value={userData.address} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    <label>
                        Miasto:
                        <input 
                            type="text" 
                            name="city" 
                            className="form-control"
                            value={userData.city} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    <label>
                        Kod pocztowy:
                        <input 
                            type="text" 
                            name="postalCode" 
                            className="form-control"
                            value={userData.postalCode} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    <label>
                        Kraj:
                        <input 
                            type="text" 
                            name="country" 
                            className="form-control"
                            value={userData.country} 
                            onChange={handleChange} 
                            disabled={!editMode}
                        />
                    </label>
                    {editMode ? (
                        <button type="button" className="user-profile-form-button" onClick={handleSave}>Zapisz</button>
                    ) : (
                        <button type="button" className="user-profile-form-button" onClick={handleEdit}>Edytuj</button>
                    )}
                    <Link to={`/historia-zamowien/${userId}`} className="user-profile-link">
                        <button type="button" className="user-profile-form-button">Historia Zamówień</button>
                    </Link>
                </form>
            </div>
        </div>

    );
};

export default UserProfile;