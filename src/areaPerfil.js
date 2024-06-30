import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';



function AreaPerfil() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dois Botões na Tela</h1>
        <div>
          <button onClick={() => alert('Botão 1 clicado!')}>Botão 1</button>
          <button onClick={() => alert('Botão 2 clicado!')}>Botão 2</button>
        </div>
      </header>
    </div>
  );
}

export default AreaPerfil;
