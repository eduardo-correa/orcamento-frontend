import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registro from './pages/Registro';
import UG from './pages/UG';
import Acao from './pages/Acao';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/ug" component={UG} />
        <Route path="/acao" component={Acao} />
      </Switch>
    </BrowserRouter>
  );
}