import React, { useState } from 'react'

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  return (
    <div className='tab-content'>
<h2>Generate Image</h2>
     <input
        type="text"
        placeholder="Enter a prompt for image"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

    </div>
    
  );
}

export default ImageGenerator;