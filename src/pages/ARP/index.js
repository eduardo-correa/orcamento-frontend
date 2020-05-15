import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de ARPs</h1>
        </section>
        <form onSubmit={handleARP}>
        <TextField
            placeholder="Número da ação"
            value = {acao}
            onChange = {e => setAcao(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="acao"
            label="Número da ação"
            name="acao"
            autoComplete="acao"
            autoFocus
          />
          <TextField 
            placeholder="Código da UG"
            value = {ug}
            onChange = {e => setUG(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="ug"
            label="Código da UG"
            name="ug"
            autoComplete="ug"
          />
          <TextField 
            placeholder="Número da ARP"
            value = {numero_arp}
            onChange = {e => setNumARP(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="numero_arp"
            label="Número da ARP"
            name="numero_arp"
            autoComplete="numero_arp"
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
