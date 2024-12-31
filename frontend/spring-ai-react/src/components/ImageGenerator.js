import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {
    try {
      const response = await fetch(`http://localhost:8081/generate-image?prompt=${encodeURIComponent(prompt)}`);
      if (!response.ok) throw new Error('Failed to fetch the image');
      const urls = await response.json();
      setImageUrls(urls);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Generate Image
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter a prompt for image"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={generateImage}>
        Generate Image
      </Button>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {imageUrls.map((url, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardMedia component="img" image={url} alt={`Generated ${index}`} />
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImageGenerator;
