import './App.css';
import './Styles.css';

import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';


function App() {
  
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Spaghetti Bolognese', ingredients: 'Pasta, Meat, Tomato', description: 'A classic Italian dish.' },
    { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', description: 'A spicy and creamy curry.' },
    { id: 3, name: 'Vegetable Stir Fry', ingredients: 'Broccoli, Carrot, Bell Pepper', description: 'A healthy and quick stir fry.' },
  ]);

  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(lowercasedQuery) ||
      recipe.ingredients.toLowerCase().includes(lowercasedQuery) ||
      recipe.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredRecipes(filtered);
  };

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home recipes={filteredRecipes}  />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="/add-recipe" element={<RecipeForm onSubmit={addRecipe} />} />
        </Routes>
      </div>
    </Router>
  );

}
  
export default App;