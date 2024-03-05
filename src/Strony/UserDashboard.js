import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserOrders from './UserOrders';

const UserDashboard = () => {
    const { userId } = useParams();
    return (
        <div>
            <UserProfile userId={userId} />
        </div>
    );
};

export default UserDashboard;
