import React, { useState } from 'react'

function RecipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState(''); 

  
  return (
    <h2>Create a Recipe</h2>
  );
}

export default RecipeGenerator;