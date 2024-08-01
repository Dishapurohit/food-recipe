import React, { useState } from 'react';

const RecipeForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [ingredients, setIngredients] = useState(initialData.ingredients || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, ingredients, description });
    setName('');
    setIngredients('');
    setDescription('');
  };

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleSubmit} className="recipe-form">
        <h2>{initialData.id ? 'Edit Recipe' : 'Add New Recipe'}</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">{initialData.id ? 'Update Recipe' : 'Add Recipe'}</button>
      </form>
    </div>
  );
};

export default RecipeForm;
