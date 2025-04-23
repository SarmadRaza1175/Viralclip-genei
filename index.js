import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const generateClip = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    setResponse(data.caption);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>ViralClip Genei</h1>
      <input 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Paste YouTube URL" 
      />
      <button onClick={generateClip}>Generate Clip</button>
      {response && <p>{response}</p>}
    </div>
  );
}