import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function DDOItem() {

  const [id_ddo, setDDO] = useState('');
  const [id_arp_item, setArpItem] = useState('');
  const [qtd_demandada, setQtdDemandada] = useState('');
  const [qtd_aprovada, setQtdAprovada] = useState('');
  const [elemento_despesa, setElementoDespesa] = useState('');


  const history = useHistory();

  async function handleDDOItem(e) {
    e.preventDefault();

    const data = {
      id_ddo,
      id_arp_item,
      qtd_demandada,
      qtd_aprovada,
      elemento_despesa,
    };

    try {
      const response = await api.post(
        'ddo_item',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      //console.log(response.data);
      alert(`Item do DDO cadastrado: ${response.data.ddo_item}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de Itens do DDO</h1>
        </section>
        <form onSubmit={handleDDOItem}>
        <TextField
            placeholder="Número do DDO"
            value = {id_ddo}
            onChange = {e => setDDO(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="id_ddo"
            label="Número do DDO"
            name="id_ddo"
            autoComplete="id_ddo"
            autoFocus
          />
          <TextField 
            placeholder="Número do Item na ARP"
            value = {id_arp_item}
            onChange = {e => setArpItem(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="id_arp_item"
            label="Número do Item na ARP"
            name="id_arp_item"
            autoComplete="id_arp_item"
          />
          <TextField 
            placeholder="Quantidade Demandada"
            value = {qtd_demandada}
            onChange = {e => setQtdDemandada(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="qtd_demandada"
            label="Quantidade Demandada"
            name="qtd_demandada"
            autoComplete="qtd_demandada"
          />
          <TextField 
            placeholder="Quantidade Aprovada"
            value = {qtd_aprovada}
            onChange = {e => setQtdAprovada(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="qtd_aprovada"
            label="Quantidade Aprovada"
            name="qtd_aprovada"
            autoComplete="qtd_aprovada"
          />
          <TextField 
            placeholder="Elemento de Despesa"
            value = {elemento_despesa}
            onChange = {e => setElementoDespesa(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="elemento_despesa"
            label="Elemento de Despesa"
            name="elemento_despesa"
            autoComplete="elemento_despesa"
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
