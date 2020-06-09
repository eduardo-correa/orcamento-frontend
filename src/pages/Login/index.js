import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import logoCSJT from '../../assets/Logo_CSJT.png';
import Copyright from '../../Components/Copyright';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function Login() {

  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email,
      senha,
    };

    try {
      //const response = await api.post('sessions', data);
      await api.post('sessions', data);
      history.push('/home');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <img src={logoCSJT} alt="CSJT" className="avatar" />
        <Typography component="h1" variant="h5">
          CGGOV Orçamento
        </Typography>
        <form className="formulario" onSubmit={handleLogin}>
          <TextField
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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="enviar"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/usuario">
                Não tenho cadastro
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}