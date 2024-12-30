import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
        textAlign: 'center',
        padding: 2,
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ marginBottom: 2 }}
      >
        <Tab label="Image Generator" />
        <Tab label="Ask AI" />
        <Tab label="Recipe Generator" />
      </Tabs>

      <Box>
        {activeTab === 0 && <ImageGenerator />}
        {activeTab === 1 && <ChatComponent />}
        {activeTab === 2 && <RecipeGenerator />}
      </Box>
    </Box>
  );
}

export default App;
