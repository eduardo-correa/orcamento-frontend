import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Usuario from './pages/Usuario';
import UG from './pages/UG';
import Acao from './pages/Acao';
import ARP from './pages/ARP';
import ARPItem from './pages/ARPItem';
import DDO from './pages/DDO';
import DDOItem from './pages/DDOItem';
import Descentralizacao from './pages/Descentralizacao';
import NotaCredito from './pages/NotaCredito';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/usuario" component={Usuario} />
        <Route path="/ug" component={UG} />
        <Route path="/acao" component={Acao} />
        <Route path="/arp" component={ARP} />
        <Route path="/arp_item" component={ARPItem} />
        <Route path="/ddo" component={DDO} />
        <Route path="/ddo_item" component={DDOItem} />
        <Route path="/descentralizacao" component={Descentralizacao} />
        <Route path="/nota_credito" component={NotaCredito} />
      </Switch>
    </BrowserRouter>
  );
}