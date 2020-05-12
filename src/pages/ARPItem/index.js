import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function ARPItem() {

  const [arp, setARP] = useState('');
  const [nome, setNome] = useState('');
  const [numero_item, setNumItem] = useState('');
  const [valor, setValor] = useState('');

  const history = useHistory();

  async function handleARPItem(e) {
    e.preventDefault();

    const data = {
      arp,
      nome,
      numero_item,
      valor,
    };

    try {
      const response = await api.post(
        'arp_item',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      //console.log(response.data);
      alert(`Item cadastrado: ${response.data.item_arp}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="arpitem-container">
      <div className="content">
        <section>
          <h1>Cadastro de Itens da ARP</h1>

        </section>
        <form onSubmit={handleARPItem}>
        <input
            placeholder="Número da ARP"
            value = {arp}
            onChange = {e => setARP(e.target.value)}
          />
          <input
            placeholder="Nome do Item"
            value = {nome}
            onChange = {e => setNome(e.target.value)}
          />
          <input
            placeholder="Número do Item na ARP"
            value = {numero_item}
            onChange = {e => setNumItem(e.target.value)}
          />
          <input
            placeholder="Valor"
            value = {valor}
            onChange = {e => setValor(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
