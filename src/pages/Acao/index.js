import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function Acao() {

  const [nome, setnome] = useState('');
  const [descricao, setDescricao] = useState('');

  const history = useHistory();

  async function handleAcao(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
    };

    try {
      const response = await api.post(
        'acoes',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      alert(`Ação cadastrada: ${response.data.acao}`);
      //localStorage.setItem('userId', response.data.usuario);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }

    
  }

  return (
    <div className="acao-container">
      <div className="content">
        <section>
          <h1>Cadastro de Ações da JT</h1>

        </section>
        <form onSubmit={handleAcao}>
          <input
            placeholder="Nome da ação"
            value = {nome}
            onChange = {e => setnome(e.target.value)}
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
