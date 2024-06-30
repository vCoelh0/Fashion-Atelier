import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './produto.css';

function Blusa({products}) {
  const blusaProducts = products.filter(product => product.className.startsWith('blusa'));

  return (
    <>
    
      <div>
        <h1 className="promocao">PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO</h1>
      </div>

      <div>
        <h1 className="blusa">Blusas:</h1>

        <div >
          {blusaProducts.map((product, index) => (
            <Link key={index} to={`/descricaoProduto/${product.alt}`}>
              <img
                className={product.className}
                src={product.src}
                alt={product.className}
                width="300"
                height="200"
              />
            </Link>
          ))}
        </div> 
     
      </div>

      <footer>
         <h1 className="text-contact">Contato</h1>
          <p className="text-WhatsApp">WhatsApp: (11) 98626-7098</p>
          <p className="text-Instagram">Instagram: @fashion_atelier</p>
          <p className="text-Email">Email: fashion.atelier@gmail.com</p>
      </footer>
    </>
  );
}

export default Blusa;
