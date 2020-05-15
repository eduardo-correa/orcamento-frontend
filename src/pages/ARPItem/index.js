import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ARPItem() {

  const [arp, setARP] = useState('');
  const [nome, setNome] = useState('');
  const [numero_item, setNumItem] = useState('');
  const [valor, setValor] = useState('');

  const history = useHistory();

  async function handleARPItem(e) {
    e.preventDefault();

    const data = {
      arp,
      nome,
      numero_item,
      valor,
    };

    try {
      const response = await api.post(
        'arp_item',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      //console.log(response.data);
      alert(`Item cadastrado: ${response.data.item_arp}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de Itens da ARP</h1>
        </section>
        <form onSubmit={handleARPItem}>
        <TextField
            placeholder="Número da ARP"
            value = {arp}
            onChange = {e => setARP(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="arp"
            label="Número da ARP"
            name="arp"
            autoComplete="arp"
            autoFocus
          />
          <TextField 
            placeholder="Nome do Item"
            value = {nome}
            onChange = {e => setNome(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome do Item"
            name="nome"
            autoComplete="nome"
          />
          <TextField 
            placeholder="Número do Item na ARP"
            value = {numero_item}
            onChange = {e => setNumItem(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="numero_item"
            label="Número do Item na ARP"
            name="numero_item"
            autoComplete="numero_item"
          />
          <TextField 
            placeholder="Valor"
            value = {valor}
            onChange = {e => setValor(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="valor"
            label="Valor"
            name="valor"
            autoComplete="valor"
          /><br/><br/>
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
