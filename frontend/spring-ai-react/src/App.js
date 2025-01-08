import React, { useContext } from 'react';
import { Tabs, Tab, Box, IconButton } from '@mui/material';
// import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from './ThemeContext';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', textAlign: 'center', padding: 2, position: 'relative' }}>
      {/* Theme Toggle Button */}
      {/* <IconButton
        onClick={toggleTheme}
        sx={{ position: 'absolute', top: 16, right: 16 }}
        color="inherit"
      >
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton> */}

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
      <IconButton onClick={toggleTheme} color="inherit" 
      sx={{ position: 'absolute', top: 16, right: 16 }}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>


      <Box>
        {activeTab === 0 && <ImageGenerator />}
        {activeTab === 1 && <ChatComponent />}
        {activeTab === 2 && <RecipeGenerator />}
      </Box>
    </Box>
  );
}

export default App;