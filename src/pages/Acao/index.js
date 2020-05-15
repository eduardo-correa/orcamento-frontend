import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de Ações da JT</h1>
        </section>
        <form onSubmit={handleAcao}>
        <TextField
            placeholder="Nome da ação"
            value = {nome}
            onChange = {e => setnome(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome da ação"
            name="nome"
            autoComplete="nome"
            autoFocus
          />
          <TextField 
            placeholder="Descrição"
            value = {descricao}
            onChange = {e => setDescricao(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="descricao"
            label="Descrição"
            name="descricao"
            autoComplete="descricao"
          /> <br/> <br/>
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
