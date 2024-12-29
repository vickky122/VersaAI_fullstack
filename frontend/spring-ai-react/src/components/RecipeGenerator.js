import React, { useState } from 'react'

function RecipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState(''); 

    const createRecipe = async () => {
      try {
          const response = await fetch(`http://localhost:8081/recipe-creator?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`)
          const data = await response.text();
          console.log(data);
          setRecipe(data);
      } catch (error) {
          console.error("Error generating recipe : ", error)
      }
  };
  
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

<button onClick={() => setRecipe(chatService.recipeCreator(ingredients, cuisine, dietaryRestrictions))}>Generate Recipe</button>
    <div className="output">
      <p>{recipe}</p>
    </div>
    
    </div>
    
    
  );
}

export default RecipeGenerator;