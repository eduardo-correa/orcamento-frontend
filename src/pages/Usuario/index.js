import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

import logoCSJT from '../../assets/Logo_CSJT.png';
import Copyright from '../../Components/Copyright';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 170,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Usuario() {

  const [perfil, setPerfil] = useState('');
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const classes = useStyles();

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
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logoCSJT} alt="CSJT" className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Cadastro de usuários
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="perfil-label">
                Perfil
              </InputLabel>
              <Select
                labelId="perfil-label"
                id="perfil"
                value={perfil}
                onChange={e => setPerfil(e.target.value)}
                displayEmpty
                autoFocus
                required
                fullWidth
              >
                <MenuItem value={2}>Servidor</MenuItem>
                <MenuItem value={3}>Estagiário</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Matrícula"
                value = {matricula}
                onChange = {e => setMatricula(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="matricula"
                label="Matrícula"
                name="matricula"
                autoComplete="matricula"
              />
            </Grid>
            
            
            <Grid item xs={12}>
              <TextField
                placeholder="Nome"
                value = {nome}
                onChange = {e => setNome(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                name="nome"
                autoComplete="nome"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="E-mail"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
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
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/">
                Já sou cadastrado(a), faça login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
