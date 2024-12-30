import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

function ChatComponent() {
  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const askAI = async () => {
    try {
      const response = await fetch(`http://localhost:8081/ask-ai?prompt=${prompt}`);
      const data = await response.text();
      setChatResponse(data);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    
      <Paper elevation={3} sx={{ padding: 3, margin: '0 auto', maxWidth: 600, backgroundColor: 'background.paper', color: 'text.primary' }}>

      <Typography variant="h5" gutterBottom>
        Talk to AI
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter a prompt for AI"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={askAI}>
        Ask AI
      </Button>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {chatResponse}
        </Typography>
      </Box>
    </Paper>
  );
}

export default ChatComponent;
