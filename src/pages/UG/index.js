import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de Unidades Gestoras</h1>
        </section>
        <form onSubmit={handleUG}>
        <TextField
            placeholder="Código da UG"
            value = {cod_ug}
            onChange = {e => setCodUg(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="cod_ug"
            label="Código da UG"
            name="cod_ug"
            autoComplete="cod_ug"
            autoFocus
          />
          <TextField 
            placeholder="UF"
            value = {uf}
            onChange = {e => setUF(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="uf"
            label="UF"
            name="uf"
            autoComplete="uf"
          />
          <TextField 
            placeholder="Número do Regional"
            value = {num_regional}
            onChange = {e => setNumRegional(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="num_regional"
            label="Número do Regional"
            name="num_regional"
            autoComplete="num_regional"
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
