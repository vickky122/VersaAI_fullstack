import './App.css';
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');

  const handleTabChange = (tab)=>{
    //alert(tab)
    setActiveTab(tab);
  }

return(
  <div className="App">
    <button onClick={()=>handleTabChange('image-generator')}>
      Image Generator
      </button>
    <button onClick={()=>handleTabChange('chat')}>
      Chat
      </button>
    <button onClick={()=>handleTabChange('recipe-generator')}>
      Recipe Generator
      </button>

      <div>
        {activeTab === 'image-generator' && <h1>Image Generator</h1>}
        {activeTab === 'chat' && <h1>Chat</h1>} 
        {activeTab === 'recipe-generator' && <h1>Recipe Generator</h1>}
      </div>
    </div>
    );
  }

export default App;
