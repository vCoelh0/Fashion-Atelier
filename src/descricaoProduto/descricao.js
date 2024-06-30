import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './descricao.css';
import swal from 'sweetalert';


function Descricao({ products, adicionarAoCarrinho }) {
  const { alt } = useParams();
  const product = products.find(p => p.alt === alt);
  const addToCartBtnRef = useRef(null);
  
  const chatIconRef = useRef(null);
  const closeChatBtnRef = useRef(null);

  useEffect(() => {
    if (product) {
      const handleAddToCart = () => {
        swal({
          title: "Item adicionado a sacola!",
          text: "Excelente escolha!",
          icon: "success",
        });
        adicionarAoCarrinho({
          nome: product.alt,
          imagem: product.src,
          preco: 'R$'+ product.preco +',00'
        });
      };



      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


     
      const openChat = () => document.querySelector('.chat-box').style.transform = 'translateY(0)';
      const closeChat = () => document.querySelector('.chat-box').style.transform = 'translateY(100%)';

      const addToCartBtn = addToCartBtnRef.current;
      const chatIcon = chatIconRef.current;
      const closeChatBtn = closeChatBtnRef.current;

      addToCartBtn.addEventListener('click', handleAddToCart);
      chatIcon.addEventListener('click', openChat);
      closeChatBtn.addEventListener('click', closeChat);

      return () => {
        addToCartBtn.removeEventListener('click', handleAddToCart);
        chatIcon.removeEventListener('click', openChat);
        closeChatBtn.removeEventListener('click', closeChat);
      };
    }
  }, [product, adicionarAoCarrinho]);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <div className="container-descricao">
        <div className="image-descricao">
          <img src={product.src} alt={product.alt} />
        </div>
        <div className="product-info">
          <h1>{product.alt}</h1>
          <p className='paragrafo'>{product.description}</p>
          <div className="price">
            <p className='paragrafo'> R${product.preco},00  </p>
          </div>
          <div className="buttons">
            <button ref={addToCartBtnRef} id="addToCartBtn">Adicionar a sacola</button>
          </div>
  

  </div>
</div>
        
      <div className="chat"></div>
      <div className="chat-icon" ref={chatIconRef}>
        <i className="fas fa-comment-alt"></i>
      </div>
      <div className="chat-box">
        <div className="chat-header">
          <span>Chat Auxiliar</span>
          <button className="close-chat-btn" ref={closeChatBtnRef}>&times;</button>
        </div>
        <div className="chat-body">
          <p>Olá! Como podemos ajudar?</p>
        </div>
      </div>
    </div>
  );
}



export default Descricao;
