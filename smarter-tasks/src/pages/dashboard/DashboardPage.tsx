import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session and current user's information from local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');

        // Redirect user to the signin page after logout
        navigate('/signin');
    };

    const data = localStorage.getItem('userData');
    const userData = data ? JSON.parse(data) : null;
    const name = userData ? userData.name : '';
    const email = userData ? userData.email : '';

    return (
        <div>
            <button id="logout-link" onClick={handleLogout}>Logout</button>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
        </div>
    );
};

export default DashboardPage;
