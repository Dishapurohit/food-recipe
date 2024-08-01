import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeList({ recipes }){
  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <h2><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Description:</strong> {recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

