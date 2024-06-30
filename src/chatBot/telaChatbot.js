// frontend chatbot
import React, { useState } from 'react';
import axios from 'axios';
import './chat-gpt.css';

function ChatBot() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt });
      setResponse(res.data.completion);
      setError(''); 
    } catch (error) {
      console.error('Erro ao obter resposta do ChatGPT:', error);
      setError('Não foi possível obter a resposta. Verifique a conexão e tente novamente.');
    }
  };

  return (
    <div className="App">
      <div id="assistente">
        <h1>Assistente Virtual</h1>
        <h3> Como posso ajudar?</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
            placeholder="Faça uma pergunta"
          />
          <button type="submit" className='bnt-chat'>Enviar</button>
        </form>
        <div className="response">
          {response && <p>Resposta: {response}</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
