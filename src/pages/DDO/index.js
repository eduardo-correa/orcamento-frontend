import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function DDO() {

  const [id_ug, setIdUg] = useState('');
  const [novo, setNovo] = useState('');
  const [recurso_proprio, setRecProprio] = useState('');
  const [vlr_demandado, setVlrDemandado] = useState('');
  const [aprc_cgtic_local, setAprCgticLocal] = useState('');
  const [possui_dod, setPossuiDod] = useState('');
  const [compr_liquidacao, setComprLiquidacao] = useState('');
  const [cronograma, setCronograma] = useState('');
  const [ass_presidente, setAssPresidente] = useState('');
  const [po_local, setPoLocal] = useState('');

  const history = useHistory();

  function setBoolean(funcao, valor) {
    valor === "true" ? funcao(true): funcao(false);
  }

  async function handleDDO(e) {
    e.preventDefault();

    const data = {
      id_ug,
      novo,
      recurso_proprio,
      vlr_demandado,
      aprc_cgtic_local,
      possui_dod,
      compr_liquidacao,
      cronograma,
      ass_presidente,
      po_local
    };

    try {
      const response = await api.post(
        'ddo',
        data,
        {headers:{
          Authorization: 1,
        }}
      );
      alert(`DDO cadastrado: ${response.data.ddo}`);
      history.push('/');

    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <h1>Cadastro de DDO</h1>
        <form onSubmit={handleDDO}>
          <TextField
            placeholder="Unidade Gestora"
            value = {id_ug}
            onChange = {e => setIdUg(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="id_ug"
            label="Id da Unid. Gestora"
            name="id_ug"
            autoComplete="id_ug"
            autoFocus
          />
          <TextField
            placeholder="Recurso Próprio (R$)"
            value = {recurso_proprio}
            onChange = {e => setRecProprio(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="recurso_proprio"
            label="Recurso Próprio"
            name="recurso_proprio"
            autoComplete="recurso_proprio"
          />
          <TextField
            placeholder="Valor Demandado (R$)"
            value = {vlr_demandado}
            onChange = {e => setVlrDemandado(e.target.value)}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="vlr_demandado"
            label="Valor Demandado"
            name="vlr_demandado"
            autoComplete="vlr_demandado"
          />

          <FormControl component="fieldset">
          <FormLabel component="legend">Nova Demanda</FormLabel>
          <RadioGroup aria-label="novo"
          name="novo"
          onChange = {e => setBoolean(setNovo, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>
          
          <FormLabel component="legend">Aprovado no CGTIC local</FormLabel>
          <RadioGroup aria-label="aprc_cgtic_local"
          name="aprc_cgtic_local"
          onChange = {e => setBoolean(setAprCgticLocal, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>

          <FormLabel component="legend">Possui DOD</FormLabel>
          <RadioGroup aria-label="possui_dod"
          name="possui_dod"
          onChange = {e => setBoolean(setPossuiDod, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>

          <FormLabel component="legend">Se Compromete com a liquidação</FormLabel>
          <RadioGroup aria-label="compr_liquidacao"
          name="compr_liquidacao"
          onChange = {e => setBoolean(setComprLiquidacao, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>

          <FormLabel component="legend">Possui Cronograma</FormLabel>
          <RadioGroup aria-label="cronograma"
          name="cronograma"
          onChange = {e => setBoolean(setCronograma, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>

          <FormLabel component="legend">Possui Assinatura do Presidente</FormLabel>
          <RadioGroup aria-label="ass_presidente"
          name="ass_presidente"
          onChange = {e => setBoolean(setAssPresidente, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>

          <FormLabel component="legend">Incluso no PO Local</FormLabel>
          <RadioGroup aria-label="po_local"
          name="po_local"
          onChange = {e => setBoolean(setPoLocal, e.target.value)}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </RadioGroup>

          </FormControl>
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
