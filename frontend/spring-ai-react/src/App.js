import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import { Box, IconButton, Tabs, Tab, Button } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DashboardPage from './components/DashboardPage'; 

function App() {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Router> {/* Wrap the app in Router */}
      <Box sx={{ width: '100%', typography: 'body1', textAlign: 'center', padding: 2, position: 'relative' }}>
        <IconButton onClick={toggleTheme} color="inherit" sx={{ position: 'absolute', top: 16, right: 16 }}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Tabs for navigation */}
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

        {/* Routes for page navigation */}
        <Routes>
          <Route path="/" element={<DashboardPage />} /> {/* Default route to Dashboard */}
          <Route path="/image-generator" element={<ImageGenerator />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/recipe-generator" element={<RecipeGenerator />} />
        </Routes>

        {/* Render tabs based on active selection */}
        <Box>
          {activeTab === 0 && <ImageGenerator />}
          {activeTab === 1 && <ChatComponent />}
          {activeTab === 2 && <RecipeGenerator />}
        </Box>
      </Box>
    </Router>
  );
}

export default App;
