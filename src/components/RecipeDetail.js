import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <h3>Ingredients:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Description:</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
