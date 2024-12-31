import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Grid, Card, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8081/generate-images?prompt=${prompt}`);
      const data = await response.json();
      setImageUrls(data.imageUrls || []);
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h5" gutterBottom>
        Generate Images
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter prompt for images"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={generateImages}>
        Generate
      </Button>
      {isLoading ? (
        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
      ) : (
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
      )}
    </motion.div>
  );
}

export default ImageGenerator;
