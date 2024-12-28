import './App.css';
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');

return(
  <div className="App">
    <button>Image Generator</button>
    <button>Chat</button>
    <button>Recipe Generator</button>
    </div>
    );
  }

export default App;
