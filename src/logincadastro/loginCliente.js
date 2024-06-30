import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './loginCliente.css';
import swal from 'sweetalert';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        senha: senha
      });
      setMessage(response.data);
      
      if (response.data === 'Login realizado com sucesso') {
        navigate('/');
        swal({
          title: "Login realizado com sucesso!",
          text: "Seja bem-vindo(a)!",
          icon: "sucess",
        });
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage('Erro ao conectar com o servidor');
      }
    }
  };

  return (
    <>
      <div>
          
        <div className="conteudo">
          <img src="/assets/Imagens/Icones/fotoroupa.jpg" alt="Segunda imagem no lado esquerdo" />
          <div className="botoes">
            <label class="text-cliente">Bem vindo Cliente!</label>
            <div className="inputs">
              <input
                class="input-email"
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                class="input-senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="botoes-login">
              <button className="btn" onClick={handleLogin}><span>Entrar</span></button>
            </div>
            {message && <div className="message">{message}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
