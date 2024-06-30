import React, { useState } from 'react';
import './buscaCep.css';
import swal from 'sweetalert';

const BuscaCep = () => {
  const [cep, setCep] = useState('');
  const [adress, setAdress] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [message, setMessage] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');

  const handleCepBlur = async () => {
    try {
      const onlyNumbers = /^[0-9]+$/;
      const cepValid = /^[0-9]{8}$/;

      if (!onlyNumbers.test(cep) || !cepValid.test(cep)) {
        swal({
          title: "O CEP inserido é inválido!",
          text: "Por favor, verifique se o CEP digitado está correto.",
          icon: "error",
        });
        return;
      }

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (!response.ok) {
        throw await response.json();
      }

      const responseCep = await response.json();
      setAdress(responseCep.logradouro);
      setBairro(responseCep.bairro);
      setCidade(responseCep.localidade);
    } catch (error) {
      if (error?.cep_error) {
        setMessage(error.cep_error);
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }
      console.log(error);
    }
  };

  const CompraFinalizada = (e) => {
    e.preventDefault();
    if (!cep || !adress || !bairro || !cidade) {
      swal({
        title: "Preencha todos os campos",
        text: "Por favor, preencha todos os campos do endereço antes de finalizar a compra.",
        icon: "warning",
      });
    } else if (!formaPagamento) {
      swal({
        title: "Selecione uma forma de pagamento",
        text: "Por favor, selecione uma forma de pagamento antes de finalizar a compra.",
        icon: "warning",
      });
    } else {
      swal({
        title: "Compra realizada com sucesso!",
        text: "Fashion Atelier agradece!",
        icon: "success",
      });
    }
  };

  return (
    <div className="container-cep">
      <div className="box">
        <h1>Endereço De Entrega</h1>
        <span id="message">{message}</span>
        <form>
          <input
            type="text"
            id="cep"
            placeholder="CEP (somente números)"
            className="input-cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={handleCepBlur}
          />
          <input
            type="text"
            id="adress"
            placeholder="Endereço"
            className="input-cep"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            disabled
          />
          <input
            type="text"
            id="bairro"
            placeholder="Bairro"
            className="input-cep"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            disabled
          />
          <input
            type="text"
            id="cidade"
            placeholder="Cidade"
            className="input-cep"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            disabled
          />
        </form>

        <div className="input-pagamento">
          <h2>Forma de Pagamento</h2>
          <input
            type='radio'
            name='forma-pagamento'
            id='credito'
            value='credito'
            onChange={(e) => setFormaPagamento(e.target.value)}
          />
          <label htmlFor='credito'>Crédito</label> <br />
          <input
            type='radio'
            name='forma-pagamento'
            id='debito'
            value='debito'
            onChange={(e) => setFormaPagamento(e.target.value)}
          />
          <label htmlFor='debito'>Débito</label> <br />
          <input
            type='radio'
            name='forma-pagamento'
            id='pix'
            value='pix'
            onChange={(e) => setFormaPagamento(e.target.value)}
          />
          <label htmlFor='pix'>Pix</label> <br />
          
          <button className="button-pagamento" onClick={CompraFinalizada}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default BuscaCep;
