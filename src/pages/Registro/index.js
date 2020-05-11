import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function Registro() {

  const [perfil, setPerfil] = useState('');
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleRegistro(e) {
    e.preventDefault();

    const data = {
      perfil,
      matricula,
      nome,
      email,
      senha,
    };

    try {
      const response = await api.post(
        'usuarios',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      alert(`Id cadastrado: ${response.data.usuario}`);
      //localStorage.setItem('userId', response.data.usuario);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }

    
  }

  return (
    <div className="registro-container">
      <div className="content">
        <section>
          <h1>Cadastro de Usuário</h1>
          <p>Faça seu cadastro para ter acesso ao sistema de controle orçamentário da CGGOV.</p>
        </section>
        <form onSubmit={handleRegistro}>
          <input
            placeholder="Perfil"
            value = {perfil}
            onChange = {e => setPerfil(e.target.value)}
          />
          <input
            placeholder="Matrícula"
            value = {matricula}
            onChange = {e => setMatricula(e.target.value)}
          />
          <input
            placeholder="Nome"
            value = {nome}
            onChange = {e => setNome(e.target.value)}
          />
          <input
            type="email" placeholder="E-mail"
            value = {email}
            onChange = {e => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value = {senha}
            onChange = {e => setSenha(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
