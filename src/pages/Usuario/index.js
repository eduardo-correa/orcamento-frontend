import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Usuario() {

  const [perfil, setPerfil] = useState('');
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleUsuario(e) {
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
      alert(`Usuário cadastrado: ${response.data.usuario}`);
      //localStorage.setItem('userId', response.data.usuario);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }

    
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <h1>Cadastro de Usuário</h1>
        <p>Faça seu cadastro para ter acesso ao sistema de controle orçamentário da CGGOV.</p>
        <form onSubmit={handleUsuario}>
          <TextField
            placeholder="Perfil"
            value = {perfil}
            onChange = {e => setPerfil(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="perfil"
            label="Perfil"
            name="perfil"
            autoComplete="perfil"
            autoFocus
          />
          <TextField 
            placeholder="Matrícula"
            value = {matricula}
            onChange = {e => setMatricula(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="matricula"
            label="Matrícula"
            name="matricula"
            autoComplete="matricula"
          />
          <TextField 
            placeholder="Nome"
            value = {nome}
            onChange = {e => setNome(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            autoComplete="nome"
          />
          <TextField 
            placeholder="E-mail"
            value = {email}
            onChange = {e => setEmail(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            type="email"
          />
          <TextField 
            placeholder="Senha"
            value = {senha}
            onChange = {e => setSenha(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="senha"
            label="Senha"
            name="senha"
            autoComplete="senha"
            type="password"
          /> <br/><br/>
          <Button
            className="enviar"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >Cadastrar
          </Button>
        </form>
      </div>
    </Container>
  )
}
