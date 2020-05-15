import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Descentralizacao() {

  const [id_ddo, setDDO] = useState('');
  const [vlr_total_aprovado, setVlrTotalAprovado] = useState('');
  const [num_processo, setNumProcesso] = useState('');
  const [reuniao_cgtic, setReuniaoCgtic] = useState('');
  const [dt_aprov_cgtic, setDtAprovCgtic] = useState('');


  const history = useHistory();

  async function handleDescentralizacao(e) {
    e.preventDefault();

    const data = {
      id_ddo,
      vlr_total_aprovado,
      num_processo,
      reuniao_cgtic,
      dt_aprov_cgtic,
    };

    try {
      const response = await api.post(
        'descentralizacao',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      //console.log(response.data);
      alert(`Descentralização cadastrada: ${response.data.descentralizacao}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de Descentralização</h1>
        </section>
        <form onSubmit={handleDescentralizacao}>
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
            placeholder="Valor total aprovado"
            value = {vlr_total_aprovado}
            onChange = {e => setVlrTotalAprovado(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="vlr_total_aprovado"
            label="Valor total aprovado"
            name="vlr_total_aprovado"
            autoComplete="vlr_total_aprovado"
          />
          <TextField 
            placeholder="Número do Processo (PAE)"
            value = {num_processo}
            onChange = {e => setNumProcesso(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="num_processo"
            label="Número do Processo (PAE)"
            name="num_processo"
            autoComplete="num_processo"
          />
          <TextField 
            placeholder="Nr. da Reunião do CGTIC"
            value = {reuniao_cgtic}
            onChange = {e => setReuniaoCgtic(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="reuniao_cgtic"
            label="Nr. da Reunião do CGTIC"
            name="reuniao_cgtic"
            autoComplete="reuniao_cgtic"
          />
          <TextField 
            value = {dt_aprov_cgtic}
            onChange = {e => setDtAprovCgtic(e.target.value)}
            type="date"
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="dt_aprov_cgtic"
            label="Data da Aprovação (CGTIC)"
            name="dt_aprov_cgtic"
            autoComplete="dt_aprov_cgtic"
          />
          <br/><br/>
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
