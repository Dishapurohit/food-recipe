import React from 'react';
import Navbar from './Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Registration from './Registeration';
// import Login from './Login';

export default function Home(){

    const currentYear = new Date().getFullYear();

    return (
        <div className='header'>
            <img className='logo' src='food-recipe.png' alt="moviedux" />
            <h2 className='app-subtitle'>Hey share your amazing recipe here!....</h2>
            <Navbar></Navbar>
            <p>Discover and share amazing recipes!</p>
            <span>This is a food recipe Sharing app for you guys...... 
                Enjoy Your amazing recipes and food with us.
            </span>
            <footer className='footer'>
                <p className='footer-text'> 
                © {currentYear} Food Sharing Recipe App, All rights reserved.
                </p>
            </footer>
        </div>
    );
}