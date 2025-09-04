import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate(); // Get the navigate function

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    nav('/'); // Navigate to home page after login
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    nav('/login'); // Navigate to login page after logout
  };

  return (
    <div className="container">
      <nav className="nav">
        <h2>Blood Donor Search</h2>
        <div className="links">
          <Link to="/">Home</Link>
          {!isLoggedIn && <Link to="/register">Register</Link>}
          {!isLoggedIn && <Link to="/login">Login</Link>}
          {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* If logged in, a user cannot go to the Register or Login pages */}
        <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register onLogin={handleLogin} />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}