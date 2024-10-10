import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const searchRecipes = async () => {
    const res = await axios.get(`http://localhost:5000/search?q=${query}`);
    setRecipes(res.data);
  };

  return (
    <div className="App">
      <h1>EpiRecipes Search</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for recipes" 
      />
      <button onClick={searchRecipes}>Search</button>

      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe._source.title}</h3>
            <p>{recipe._source.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
