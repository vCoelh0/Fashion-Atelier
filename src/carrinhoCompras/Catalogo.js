import React from 'react';

const produtos = [
  {
    nome: 'Item 1',
    imagem: 'C:\\Users\\Alunos\\Desktop\\teste\\carrinho\\src\\tenis-nike.jpg',
    preco: 'R$ 50,00'
  },    
  {
    nome: 'Item 2',
    imagem: 'src\\tenis-nike.jpg',
    preco: 'R$ 80,99'
  },

  {
    nome: 'Item 3',
    imagem: '/pexels-pixabay-207983.jpg',
    preco: 'R$ 129,99'
  }
];

function Catalogo({ adicionarAoCarrinho }) {
  return (
    <div className="catalogo">
      {produtos.map((produto, index) => (
        <div key={index} className={`item${index + 1}`}>
          <h3 className="titulo-produto">{produto.nome}</h3>
          <img src={produto.imagem} alt={produto.nome} width="120px" className="imagem-item" />
          <span className="preco-produto">{produto.preco}</span>
          <button className="btn-adicionar" onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Catalogo;
