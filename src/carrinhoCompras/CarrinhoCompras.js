import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogo from './Catalogo';
import Carrinho from './Carrinho';
import Descricao from '../descricaoProduto/descricao';

function CarrinhoCompras({ products }) {
  const [carrinho, setCarrinho] = useState(() => {
    const savedCart = localStorage.getItem('carrinho');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find((item) => item.nome === produto.nome);
    if (produtoExistente) {
      setCarrinho(carrinho.map((item) =>
        item.nome === produto.nome ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (nomeProduto) => {
    setCarrinho(carrinho.filter((item) => item.nome !== nomeProduto));
  };

  const atualizarQuantidade = (nomeProduto, novaQuantidade) => {
    setCarrinho(carrinho.map((item) =>
      item.nome === nomeProduto ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalogo adicionarAoCarrinho={adicionarAoCarrinho} />} />
        <Route path="/carrinho" element={<Carrinho carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} atualizarQuantidade={atualizarQuantidade} />} />
        <Route path="/descricao/:alt" element={<Descricao products={products} adicionarAoCarrinho={adicionarAoCarrinho} />} />
      </Routes>
    </Router>
  );
}

export default CarrinhoCompras;
