import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './cadastro.css';
import swal from 'sweetalert';


function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      swal({
        title: "Por favor, preencha todos os campos",
        text: "Para prosseguir, é necessário que todos os campos estejam devidamente preenchidos.",
        icon: "error",
      });
      return;
    }

    if (senha !== confirmarSenha) {
      swal({
        title: "As senhas não coincidem",
        text: "Por favor, verifique se as senhas estão corretas.",
        icon: "error",
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/cadastro', {
        nome: nome,
        email: email,
        senha: senha
      });
      setMessage(response.data);
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
          <img className="img-cadastro" src="/assets/Imagens/Icones/imagem-cadastro.jpg" alt="Segunda imagem no lado esquerdo" />
          <div className="botoes">
            <label class="text-cadastro">Cadastro Cliente</label>
            <div className="inputs">
              <input
                className="input-nome"
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <input
                className="input-email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="input-senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <input
                className="input-senha"
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>
            <div className="botoes-login">
              <button className="btn" onClick={handleCadastro}><span>Cadastrar</span></button>
            </div>
            {message && <div className="message">{message}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
