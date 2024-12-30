import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [recipe, setRecipe] = useState('');

  const createRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`
      );
      const data = await response.text();
      setRecipe(data);
    } catch (error) {
      console.error("Error generating recipe:", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: '0 auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        Create a Recipe
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Dietary Restrictions"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={createRecipe}>
        Create Recipe
      </Button>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {recipe}
        </Typography>
      </Box>
    </Paper>
  );
}

export default RecipeGenerator;
