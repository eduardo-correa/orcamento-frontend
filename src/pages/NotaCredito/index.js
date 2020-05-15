import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function NotaCredito() {

  const [num_nota_credito, setNtCredito] = useState('');
  const [id_descentralizacao, setDescentra] = useState('');
  const [valor, setValor] = useState('');
  const [dt_nota_credito, setDtNtCredito] = useState('');
  const [ug_favorecida, setUg] = useState('');


  const history = useHistory();

  async function handleNotaCredito(e) {
    e.preventDefault();

    const data = {
      num_nota_credito,
      id_descentralizacao,
      valor,
      dt_nota_credito,
      ug_favorecida,
    };

    try {
      const response = await api.post(
        'nt_credito',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      //console.log(response.data);
      alert(`Nota de Crédito cadastrada: ${response.data.nt_credito}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <section>
          <h1>Cadastro de Nota de Crédito</h1>
        </section>
        <form onSubmit={handleNotaCredito}>
          <TextField
            placeholder="Número da Nota de Crédito"
            value = {num_nota_credito}
            onChange = {e => setNtCredito(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="num_nota_credito"
            label="Número da Nota de Crédito"
            name="num_nota_credito"
            autoComplete="num_nota_credito"
            autoFocus
          />
          <TextField 
            placeholder="Nr. da Descentralização"
            value = {id_descentralizacao}
            onChange = {e => setDescentra(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="id_descentralizacao"
            label="Nr. da Descentralização"
            name="id_descentralizacao"
            autoComplete="id_descentralizacao"
          />
          <TextField 
            placeholder="Valor (R$)"
            value = {valor}
            onChange = {e => setValor(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="valor"
            label="Valor (R$)"
            name="valor"
            autoComplete="valor"
          />
          <TextField 
            placeholder="UG Favorecia"
            value = {ug_favorecida}
            onChange = {e => setUg(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="ug_favorecida"
            label="UG Favorecia"
            name="ug_favorecida"
            autoComplete="ug_favorecida"
          />
          <TextField 
            value = {dt_nota_credito}
            onChange = {e => setDtNtCredito(e.target.value)}
            type="date"
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="dt_nota_credito"
            label="Data da Nota de Crédito"
            name="dt_nota_credito"
            autoComplete="dt_nota_credito"
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
