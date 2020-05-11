import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function UnidadeGestora() {

  const [cod_ug, setCodUg] = useState('');
  const [uf, setUF] = useState('');
  const [num_regional, setNumRegional] = useState('');

  const history = useHistory();

  async function handleUG(e) {
    e.preventDefault();

    const data = {
      cod_ug,
      uf,
      num_regional,
    };

    try {
      const response = await api.post(
        'ug',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      alert(`UG cadastrada: ${response.data.ug}`);
      //localStorage.setItem('userId', response.data.usuario);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }

    
  }

  return (
    <div className="ug-container">
      <div className="content">
        <section>
          <h1>Cadastro de Unidades Gestoras</h1>

        </section>
        <form onSubmit={handleUG}>
          <input
            placeholder="Código da UG"
            value = {cod_ug}
            onChange = {e => setCodUg(e.target.value)}
          />
          <input
            placeholder="UF"
            value = {uf}
            onChange = {e => setUF(e.target.value)}
          />
          <input
            placeholder="Número do Regional"
            value = {num_regional}
            onChange = {e => setNumRegional(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
