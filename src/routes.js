import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Usuario from './pages/Usuario';
import UG from './pages/UG';
import Acao from './pages/Acao';
import ARP from './pages/ARP';
import ARPItem from './pages/ARPItem';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" component={Usuario} />
        <Route path="/ug" component={UG} />
        <Route path="/acao" component={Acao} />
        <Route path="/arp" component={ARP} />
        <Route path="/arp_item" component={ARPItem} />
      </Switch>
    </BrowserRouter>
  );
}