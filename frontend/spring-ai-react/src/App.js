import React, { useContext } from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles'; // yarn add react-tsparticles

import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  const Section = ({ children, id, bg }) => (
    <Box
      id={id}
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: bg || 'transparent',
      }}
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: mode === 'dark' ? '#0f0f0f' : '#fafafa',
        color: 'text.primary',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Particle Background */}
      <Particles
        style={{ position: 'absolute', top: 0, left: 0 }}
        height="100vh"
        width="100vw"
        options={{
          background: { color: 'transparent' },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            links: { enable: true, color: '#ffffff', opacity: 0.3 },
          },
        }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          background: `linear-gradient(135deg, ${
            mode === 'dark' ? '#1f1c2c, #928dab' : '#d9a7c7, #fffcdc'
          })`,
        }}
      >
        {/* Animated floating blob */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            filter: 'blur(100px)',
            top: '10%',
            left: '30%',
            zIndex: 1,
          }}
        />

        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, zIndex: 2 }}>
          🚀 VersaAI
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, zIndex: 2 }}>
          Your AI Companion for Images, Recipes & Conversations
        </Typography>
        <Button
          variant="contained"
          href="#features"
          size="large"
          sx={{ borderRadius: 3, px: 4, zIndex: 2 }}
        >
          Explore Features ↓
        </Button>
      </Box>

      {/* Features Section */}
      <Section id="features">
        <Typography variant="h4" align="center" gutterBottom>
          What can VersaAI do?
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { text: '🖼️ Image Generator', link: '#images' },
            { text: '💬 Talk to AI', link: '#chat' },
            { text: '🍳 Recipe Generator', link: '#recipes' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }}>
              <Button href={item.link} variant="outlined" sx={{ p: 4, borderRadius: 4 }}>
                {item.text}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* Functional Sections */}
      <Section id="images" bg={mode === 'dark' ? '#181818' : '#f9f9f9'}>
        <ImageGenerator />
      </Section>

      <Section id="chat" bg={mode === 'dark' ? '#0f0f0f' : '#ffffff'}>
        <ChatComponent />
      </Section>

      <Section id="recipes" bg={mode === 'dark' ? '#181818' : '#f9f9f9'}>
        <RecipeGenerator />
      </Section>

      {/* Footer */}
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="body2">⚡ Built with Spring Boot + React + AI</Typography>
      </Box>

      {/* Floating Theme Toggle */}
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: 'background.paper',
          boxShadow: 3,
        }}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default App;
