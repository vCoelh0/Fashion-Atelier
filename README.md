# Fashion-Atelier
Site de loja de roupas feito baseado na arquitetura de microsserviços. Utilizando ReactJS, NodeJS, MySQL e integração com Chat GPT.

Este projeto foi feito utilizando ReactJS no frontend, NodeJS para o backend e MySQL para armazanamento dos dados, além disso, foi feita uma integração com o Chat GPT.

Os microsserviços do site são:
   - Cadastro de Usuario.
   - Login de Usuario.
   - Barra de pesquisa.
   - Carrinho de compras.
   - Chatbot utilizando Chat GPT.
   - Busca de CEP automatica utilizando API dos correios.

Para executar o programa é necessario:
   - Adicionar arquivo .env contendo uma API Key do ChatGPT na pasta chatBot para o assistente funcionar.
   - Executar o seguinte comando na pasta principal do projeto: "npm start"
   - Executar o seguinte comando na pasta de login/cadastro: "node logar.js"
   - Executar o seguinte comando na pasta do chatbot: "node server.js"
   - Configurar a conexão com o MySQL no arquivo "logar.js", alterando as informações de host, user, database e password.

  OBS: Caso o programa não execute normalmente com o "npm start", execute o comando "npm install" e depois siga a sequencia do passo a passo.

Comando para criação do banco de dados e da tabela utilizado no MySQL:
      Create database lojaa3;
      use lojaa3;
      create table tb_usuario(
      id INT primary key auto_increment,
      nome varchar(40) not null,
      email varchar (30) not null,
      senha varchar (50) not null
      );
     
  Video do site em funcionamento: https://www.youtube.com/watch?v=MbFpB1-i1fA&ab_channel=Vinicius


  O projeto foi desenvolvido em equipe.
      
