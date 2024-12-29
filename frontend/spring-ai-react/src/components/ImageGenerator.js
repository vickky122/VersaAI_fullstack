import React, { useState } from 'react'

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {

  };

  return (
    <div className='tab-content'>
<h2>Generate Image</h2>
     <input
        type="text"
        placeholder="Enter a prompt for image"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>

      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated Image ${index}`} />
        ))}
        {/* spread operator is used to copy the array and not the reference */}
        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div key={index + imageUrls.length} className="empty-image-slot"></div>
        ))}
      </div>

    </div>
    
  );
}

export default ImageGenerator;