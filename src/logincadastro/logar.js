const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors()); 
app.use(express.json());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'lojaa3',
  password: 'usjt'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados.');
  }
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  console.log(`Tentativa de login com email: ${email}`);

  const sql = "SELECT * FROM tb_usuario WHERE email = ? AND senha = ?";
  connection.query(sql, [email, senha], (err, results) => {
    if (err) {
      console.error(`Erro ao executar a query: ${err.message}`);
      res.status(500).send('Erro ao realizar login');
    } else {
      if (results.length > 0) {
        console.log('Login realizado com sucesso');
        res.send('Login realizado com sucesso');
      } else {
        console.log('Email ou senha incorretos');
        res.status(401).send('Email ou senha incorretos');
      }
    }
  });
});

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  console.log(`Tentativa de cadastro com email: ${email}`);

  const sql = "INSERT INTO tb_usuario (nome, email, senha) VALUES (?, ?, ?)";
  connection.query(sql, [nome, email, senha], (err, results) => {
    if (err) {
      console.error(`Erro ao executar a query: ${err.message}`);
      res.status(500).send('Erro ao realizar cadastro');
    } else {
      console.log('Cadastro realizado com sucesso');
      res.send('Cadastro realizado com sucesso');
    }
  });
});

app.listen(3001, () => console.log('rodando na porta 3001...'));
