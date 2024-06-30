import React from 'react';
import './estiloCarrinho.css'
import { Link } from 'react-router-dom';

function Carrinho({ carrinho = [], removerDoCarrinho, atualizarQuantidade }) {
  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((item) => {
      const preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));
      total += preco * item.quantidade;
    });
    return total.toFixed(2);
  };

  return (
    <div class="cart-container">
    <div className="cart">
      <div className="cart-header">Sacola de Compras</div>
      {carrinho.length > 0 ? (
        carrinho.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imagem} alt={item.nome} className="product-image" />
            <div className="product-info">
              <div className="product-name">{item.nome}</div>
              <div className="product-price">{item.preco}</div>
            </div>
            <div className="cart-buttons">
              <button className="btn-remove" onClick={() => removerDoCarrinho(item.nome)}>
                Remover
              </button>
              <input
                type="number"
                className="input-quantity"
                min="1"
                value={item.quantidade}
                onChange={(e) => atualizarQuantidade(item.nome, parseInt(e.target.value))}
              />
              
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">Sua sacola está vazia.</div>
      )}
      <div className="cart-total">
        <strong>Total:</strong> <span>R$ {calcularTotal()}</span>
      </div>

      <Link to='/carrinhoCompras/buscaCEP'>
      {carrinho.length > 0 && <div className="btn-checkout">Finalizar Compra</div>}
      </Link>
    </div>
    </div>
  );
}

export default Carrinho;
