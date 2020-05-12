import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function ARP() {

  const [acao, setAcao] = useState('');
  const [ug, setUG] = useState('');
  const [numero_arp, setNumARP] = useState('');
  const [descricao, setDescricao] = useState('');

  const history = useHistory();

  async function handleARP(e) {
    e.preventDefault();

    const data = {
      acao,
      ug,
      numero_arp,
      descricao,
    };

    try {
      const response = await api.post(
        'arp',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      alert(`ARP cadastrada: ${response.data.arp}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="arp-container">
      <div className="content">
        <section>
          <h1>Cadastro de ARPs</h1>

        </section>
        <form onSubmit={handleARP}>
        <input
            placeholder="Número da ação"
            value = {acao}
            onChange = {e => setAcao(e.target.value)}
          />
          <input
            placeholder="Código da UG"
            value = {ug}
            onChange = {e => setUG(e.target.value)}
          />
          <input
            placeholder="Número da ARP"
            value = {numero_arp}
            onChange = {e => setNumARP(e.target.value)}
          />
          <input
            placeholder="Descrição"
            value = {descricao}
            onChange = {e => setDescricao(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
