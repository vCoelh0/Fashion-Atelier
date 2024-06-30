import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';

import Navbar from './Navbar';
import Shorts from './shorts';
import Blusa from './blusa';
import Sapato from './sapato';
import Vestido from './vestido';
import Login from './logincadastro/loginCliente';
import Cadastro from './logincadastro/cadastro';
import Descricao from './descricaoProduto/descricao';
import CarrinhoCompras from './carrinhoCompras/CarrinhoCompras';
import Carrinho from './carrinhoCompras/Carrinho';
import BuscaCep from './carrinhoCompras/buscaCEP';
import ChatBot from './chatBot/telaChatbot';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const contatoRef = useRef(null);
  const sobreRef = useRef(null);
  const [carrinho, setCarrinho] = useState([]);


  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleScrollTo = (ref) => {
    if(ref.current){
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
   }
  };

  const products = [
    { className: 'shorts1', src: '/assets/Imagens/Roupas/1.jpg', alt: 'Short Curto Com Bolso Preto', description: 'Conforto e estilo em uma só peça! Este shorts curto é feito de tecido leve , possui bolsos laterais funcionais.', preco:'50'},

    { className: 'shorts3', src: '/assets/Imagens/Roupas/3.jpg', alt: 'Short Curto Verde Texturizado', description: 'Moderno e sofisticado, o short texturizado é para quem deseja um visual elegante e confortável, tendo tecido de qualidade e com pequenos detalhes texturizados no  bolso e na costura.',preco:'70'},

    { className: 'shorts4', src: '/assets/Imagens/Roupas/4.jpg', alt: 'Short Moletinho Mescla Claro', description: 'O short moletinho mescla claro seria perfeito para encontros casuais e tranquilos. Feito com tecido macio e de alta qualidade, oferece um toque suave e aconchegante.',preco:'40'},

    { className: 'shorts5', src: '/assets/Imagens/Roupas/5.jpg', alt: 'Short Com Amarração Cinza', description: 'Prático e charmoso, o short com amarração é a peça ideal para quem busca estilo e conforto. ',preco:'80'},

    { className: 'blusa1', src: '/assets/Imagens/Roupas/6.jpg', alt: 'Blusa Plus Size Manga Curta Preto', description: 'Conforto e elegância em uma só peça! A blusa plus size manga curta é ideal para quem deseja um look versátil e estiloso.',preco:'70'},

    { className: 'blusa2', src: '/assets/Imagens/Roupas/7.jpg', alt: 'Blusa Plus Size Ciganinha Vermelha', description: 'A blusa plus size ciganinha combina estilo e conforto em uma peça única. Com decote ombro a ombro, ela valoriza o colo e traz um toque de feminilidade e modernidade ao seu look. ',preco:'60'},

    { className: 'blusa3', src: '/assets/Imagens/Roupas/8.jpg', alt: 'Blusa Recorte Bicolor Preta', description: 'Elegante e moderna, a blusa bicolor é perfeita para quem deseja um look sofisticado e diferenciado.',preco:'50'},

    { className: 'shorts2', src: '/assets/Imagens/Roupas/2.jpg', alt: 'Short Preto Com Recorte Preto', description: 'Pensado para proporcionar conforto e estilo, o short plus size é perfeito para valorizar suas curvas com elegância. Confeccionado em tecido de alta qualidade.',preco:'30'},

    { className: 'blusa4', src: '/assets/Imagens/Roupas/9.jpg', alt: 'Blusa Com Babado Bege', description: 'Delicada e sofisticada, a blusa com babado bege é a peça ideal para adicionar um toque romântico ao seu guarda-roupa. ',preco:'30'},

    { className: 'blusa5', src: '/assets/Imagens/Roupas/10.jpg', alt: 'Blusa Regata Tricolor Verde', description: 'Moderna e vibrante, a regata alcinha tricolor é uma escolha perfeita para dias ensolarados e eventos descontraídos.',preco:'40'},

    { className: 'sapato1', src: '/assets/Imagens/Roupas/11.jpg', alt: 'Sapato Mocassim Preto', description: 'Elegante e atemporal, o mocassim feminino seria o calçado perfeito para quem busca estilo e conforto.',preco:'100'},

    { className: 'sapato2', src: '/assets/Imagens/Roupas/12.jpg', alt: 'Sapato Salto Rosa', description: 'Elegante e estiloso, o sapato de salto alto é o símbolo primordial da sofisticação feminina.',preco:'150'},

    { className: 'sapato3', src: '/assets/Imagens/Roupas/13.jpg', alt: 'Sapato Scarpin Preto', description: 'O scarpin de salto é um clássico atemporal que nunca sai de moda. Com seu design elegante e sofisticado',preco:'110'},

    { className: 'vestido1', src: '/assets/Imagens/Roupas/14.jpg', alt: 'Vestido Preto e Branco', description: 'Este vestido é uma peça versátil que pode ser usada tanto de dia quanto de noite, em eventos casuais ou formais.',preco:'130'},

    { className: 'vestido2', src: '/assets/Imagens/Roupas/15.jpg', alt: 'Vestido Verde', description: 'O vestido verde é uma escolha vibrante e cheia de personalidade. Com a tonalidade verde, este vestido traz uma sensação de frescor e vitalidade ao seu look. ',preco:'100'},

    { className: 'vestido3', src: '/assets/Imagens/Roupas/16.jpg', alt: 'Vestido Regata Vermelho', description: 'este vestido é perfeito para destacar sua feminilidade e estilo. Ideal para eventos casuais ou para uma noite especial, ele irradia confiança e sofisticação.',preco:'140'},

    { className: 'vestido4', src: '/assets/Imagens/Roupas/17.jpg', alt: 'Vestido Viscose Bege', description: 'O vestido de viscose bege é uma escolha sofisticada e leve para os dias de verão. Feito com um tecido fluído e confortável.',preco:'100'},

    { className: 'vestido5', src: '/assets/Imagens/Roupas/18.jpg', alt: 'Vestido Longo Preto Botões', description: 'O vestido longo preto com botões é uma peça elegante e atemporal que combina estilo e praticidade. Com seu design clássico e detalhes de botões.',preco:'110'}
  
  ];



  const filtrarProdutos = products.filter(product =>
    product.alt.toLowerCase().includes(searchTerm)
  );


  //  ====================  FUNÇÕES DO CARRINHO  ========================
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
      <Navbar onSearch={handleSearch} onScrollTo={handleScrollTo} contatoRef={contatoRef} sobreRef={sobreRef} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <h1 className="promocao" align='center'>
                  PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO 
                </h1>
              </div>

              <h1 className="selector-text">O que você procura?</h1>
              <div className="selector-roupas">
                

                <Link to="/blusa">
                  <img
                    className="selector-blusas"
                    src="/assets/Imagens/Roupas/blusas.jpg"
                    alt="blusas"
                    width="300"
                    height="200"
                  />
                </Link>

                <Link to="/shorts">
                  <img
                    className="selector-shorts"
                    src="/assets/Imagens/Roupas/shorts.jpg"
                    alt="shorts"
                    width="300"
                    height="200"
                  />
                </Link>

                <Link to="/sapato">
                  <img
                    className="selector-calcados"
                    src="/assets/Imagens/Roupas/calcados.jpg"
                    alt="calcados"
                    width="300"
                    height="200"
                  />
                </Link>

                <Link to="/vestido">
                  <img
                    className="selector-vestidos"
                    src="/assets/Imagens/Roupas/vestidos.jpg"
                    alt="vestidos"
                    width="300"
                    height="200"
                  />
                </Link>

              </div>

              <div className="all-products">
                <h1 className="text-all-products">Conheça nossos produtos!</h1>
                {filtrarProdutos.map((product, index) => (
                  <Link key={index} to={`/descricaoProduto/${product.alt}`}>
                    <img
                      className={product.className}
                      src={product.src}
                      alt={product.alt}
                      width="300"
                      height="200"
                    />
                  </Link>
                ))}
              </div>

              <div>
                <h1 ref={sobreRef} className="sobre-nos">Sobre nós:</h1>
                <p className="text-sobre">
                  Bem-vindo à nossa loja de moda plus size feminina, Fashion Atelier! <br /> <br />
                  Nossa jornada começou com um simples desejo: oferecer uma experiência de moda inclusiva para mulheres de todas as formas e tamanhos. Cansadas de procurar por roupas que não só se encaixassem, mas que também celebrassem suas curvas e estilo pessoal, decidimos criar este espaço. <br />
                  Entendemos a frustração de muitas mulheres diante da escassez de opções elegantes e modernas no mercado plus size. Por isso, nos propusemos a preencher essa lacuna, trazendo uma variedade de peças cuidadosamente selecionadas que abraçam a diversidade de corpos e gostos. <br />
                  Aqui, você encontrará desde básicos versáteis até tendências da moda, tudo projetado com o conforto e a confiança em mente. Mais do que uma loja, queremos ser uma fonte de empoderamento, ajudando você a expressar sua personalidade através da moda, sem limitações de tamanho. <br />
                  Junte-se a nós nesta jornada de autoaceitação e estilo, porque a beleza vem em todas as formas e tamanhos.
                </p>
              </div>

              <footer>
                <h1 ref={contatoRef} className="text-contact">Contato</h1>
                <p className="text-WhatsApp">WhatsApp: (11) 98626-7098</p>
                <p className="text-Instagram">Instagram: @fashion_atelier</p>
                <p className="text-Email">Email: fashion.atelier@gmail.com</p>
              </footer>
            </>
          }
        />
        <Route path="/blusa" element={<Blusa products={products}/>} />
        <Route path="/shorts" element={<Shorts products={products} />} />
        <Route path="/sapato" element={<Sapato products={products}/>} />
        <Route path="/vestido" element={<Vestido products={products} />} />
        <Route path="/logincadastro/loginCliente" element={<Login />} />
        <Route path="/logincadastro/cadastro" element={<Cadastro />} />      
        <Route path="/carrinhoCompras/buscaCEP" element={<BuscaCep />} />
        <Route path="/chatBot/telaChatbot" element={<ChatBot />} />

        <Route path="/descricaoProduto/:alt" element={<Descricao products={products} adicionarAoCarrinho={adicionarAoCarrinho} />} />
        <Route path="/carrinho" element={<CarrinhoCompras products={products} carrinho={carrinho} adicionarAoCarrinho={adicionarAoCarrinho} removerDoCarrinho={removerDoCarrinho} atualizarQuantidade={atualizarQuantidade} />} />
        <Route path="/carrinhoCompras/Carrinho"  element={ <Carrinho carrinho={carrinho} 
              removerDoCarrinho={removerDoCarrinho} 
              atualizarQuantidade={atualizarQuantidade}  /> } />
      
      </Routes>
    </Router>
  );
}

export default App;
