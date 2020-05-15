import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logoCSJT from '../../assets/Logo_CSJT.png';


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
      localStorage.setItem('idUser', response.data.id_usuario);
      alert(`Id encontrado: ${response.data.id_usuario}`);

    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
      <img src={ logoCSJT } alt="CSJT" className="logo-csjt" />
      <h1>CGGOV Orçamento</h1>
      <form className="formulario" onSubmit={handleLogin}>
        <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
            placeholder="Sua senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Button
            className="enviar"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >Entrar
          </Button>
          
          <Grid container>
            <Grid item xs>
              <Link href="#">
                Esqueci minha senha
              </Link>
            </Grid>
            <Grid item>
              <Link to="/usuario" variant="body2">
                Não sou cadastrado
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    
  );
}