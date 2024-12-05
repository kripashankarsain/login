import React from 'react';
import Register from './Register';
import Login from './Login';

function AuthPage() {
    const handleRegister = (userData) => {
        // Handle registration logic here, e.g., send data to server
        console.log('Registering user with data:', userData);
    };

    const handleLogin = (credentials) => {
        // Handle login logic here, e.g., authenticate user
        console.log('Logging in with credentials:', credentials);
    };

    return (
        <div className="auth-page">
            <div className="register-section">
                <h2>Register</h2>
                <Register onRegister={handleRegister} />
            </div>
            <div className="login-section">
                <h2>Login</h2>
                <Login onLogin={handleLogin} />
            </div>
        </div>
    );
}

export default AuthPage;
