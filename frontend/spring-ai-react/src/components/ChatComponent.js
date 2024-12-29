import React, { useState } from 'react'

function ChatComponent() {

  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  return (
    <div>
      <h2>Talk to AI</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt for AI"
            />
    </div>
  );
}

export default ChatComponent;