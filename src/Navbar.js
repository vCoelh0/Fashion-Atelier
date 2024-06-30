import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';

function Navbar({ onSearch, onScrollTo, contatoRef, sobreRef }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  const handleScrollClick = (ref) => (event) => {
    event.preventDefault();
    onScrollTo(ref);
  };

  return (
    <div className="navbar">
      <div className="header-inner-content">
        <img className="logo-navbar" src="/assets/Imagens/Icones/logo.jpg" alt="Logo" />
        <nav>
          <div className="search-box">
            <input
              type="text"
              className="search-text"
              placeholder="Busque seu estilo..."
              onChange={handleInputChange}
            />
            <a href="#" className="search-button">
              <img
                src="/assets/Imagens/Icones/lupa.svg"
                alt="lupa"
                height="20"
                width="20"
              />
            </a>
          </div>
        </nav>

        <div className="nav-icons">
          <Link to="/" className="home">Home</Link>
          <a href="#" className="sobre" onClick={handleScrollClick(sobreRef)}>Sobre</a>
          <a href="#" className="contato" onClick={handleScrollClick(contatoRef)}>Contato</a>
          
          <Link to="/carrinhoCompras/Carrinho">
            <img
              className="sacola"
              src="/assets/Imagens/Icones/sacola.png"
              alt="sacola"
            />
          </Link>

          <Link to="./logincadastro/loginCliente">
          <button className='button-login' alt='login'>Login</button>
           </Link>
          
          <Link to="./logincadastro/cadastro" >
          
          <button className='button-cadastrar' alt="login">Cadastrar</button></Link>

          <Link to='/chatBot/telaChatbot'>
          <img
            className="chatbot"
            src="/assets/Imagens/Icones/bot-de-bate-papo.png"
            alt="chatbot"
          />
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
