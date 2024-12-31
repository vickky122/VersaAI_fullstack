import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, margin: '0 auto', maxWidth: 600, backgroundColor: 'background.paper', color: 'text.primary' }}
      >
        <Typography variant="h5" gutterBottom>
          Create a Recipe
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label={`Ingredients (comma separated) (${ingredients.length}/200)`}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label={`Cuisine (${cuisine.length}/50)`}
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label={`Dietary Restrictions (${dietaryRestrictions.length}/100)`}
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={createRecipe}>
          Create Recipe
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {recipe}
            </Typography>
          </motion.div>
        </Box>
      </Paper>
    </motion.div>
  );
}

export default RecipeGenerator;
