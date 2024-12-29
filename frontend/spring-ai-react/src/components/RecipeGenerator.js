import React, { useState } from 'react'

function RecipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState(''); 


  
  return (
    <div>

<h2>Create a Recipe</h2>
    <input
      type="text"
      placeholder="Enter ingredients"
      value={ingredients}
      onChange={(e) => setIngredients(e.target.value)}
    />
    <input
      type="text"
      placeholder="Enter cuisine type"
      value={cuisine}
      onChange={(e) => setCuisine(e.target.value)}
    />
    <input
      type="text"
      placeholder="Enter dietary restrictions"
      value={dietaryRestrictions}
      onChange={(e) => setDietaryRestrictions(e.target.value)}
    />
    
    </div>
    
    
  );
}

export default RecipeGenerator;