import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email,
      senha,
    };

    try {
      const response = await api.post('sessions', data);
      alert(`Id cadastrado: ${response.data.id_usuario}`);

    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Sua senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>

          <Link to="/registro">
            Não tenho login
          </Link>
        </form>
      </section>
    </div>
  );
}