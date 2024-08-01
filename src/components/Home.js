import React from 'react';
import '../Styles.css';
import RecipeList from './RecipeList';

export default function Home({ recipes }){
    

    const currentYear = new Date().getFullYear();

    return (
        <div className="home">
            <img className='logo' src='food-recipe.png' alt="Food Recipe Sharing App" />
            <h1>Welcome to RecipeApp</h1>
            <p>Discover and share amazing recipes!</p>
            <span>This is a food recipe Sharing app for you guys...... 
                Enjoy Your amazing recipes and food with us.
            </span>
            <RecipeList recipes={recipes} />
            <footer className='footer'>
                <p className='footer-text'>
                    © {currentYear} Food Sharing Recipe App, All rights reserved.
                </p>
            </footer>
        </div>
    );
};