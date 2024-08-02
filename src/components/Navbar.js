import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Navbar({ onSearch }) {

    const handleSearch = (e) => {
        onSearch(e.target.value);
      };

    return (
        <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/">Food Sharing Recipe App</Link>
        </div>
        <div className="navbar-links">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/recipelist">RecipeList</Link></li>
            </ul>
            <input type="text" placeholder="Search..." className="search-input" onChange={handleSearch}/>
            <Search onSearch={onSearch} />
        </div>
        </nav>
    );
};