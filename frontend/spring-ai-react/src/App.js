import './App.css';
import React, { useState } from 'react';
import ImageGenerator from './components/ImageGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');

  const handleTabChange = (tab)=>{
    //alert(tab)
    setActiveTab(tab);
  }

return(
  <div className="App">
    <button className={activeTab === 'image-generator' ? 'active' : ''}
    onClick={()=>handleTabChange('image-generator')}>
      Image Generator
      </button>
    <button className={activeTab === 'chat' ? 'active' : ''}
    onClick={()=>handleTabChange('chat')}>
      Chat
      </button>
    <button className={activeTab === 'recipe-generator' ? 'active' : ''}
    onClick={()=>handleTabChange('recipe-generator')}>
      Recipe Generator
      </button>

      <div>
        {activeTab === 'image-generator' && <ImageGenerator/>}
        {activeTab === 'chat' && <h1>Chat</h1>} 
        {activeTab === 'recipe-generator' && <h1>Recipe Generator</h1>}
      </div>
    </div>
    );
  }

export default App;
