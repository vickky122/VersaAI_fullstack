import React, { useContext } from 'react';
import { Tabs, Tab, Box, IconButton } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = React.useState(0); // Active tab state

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue); // Change active tab
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', textAlign: 'center', padding: 2, position: 'relative' }}>
      {/* Theme Toggle Button */}
      <IconButton onClick={toggleTheme} color="inherit" sx={{ position: 'absolute', top: 16, right: 16 }}>
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      {/* Tabs Navigation */}
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

      {/* Tab Content */}
      <Box>
        {activeTab === 0 && <ImageGenerator />} {/* Show Image Generator if the active tab is 0 */}
        {activeTab === 1 && <ChatComponent />} {/* Show Chat if the active tab is 1 */}
        {activeTab === 2 && <RecipeGenerator />} {/* Show Recipe Generator if the active tab is 2 */}
      </Box>
    </Box>
  );
}

export default App;
