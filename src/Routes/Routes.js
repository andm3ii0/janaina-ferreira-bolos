import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Pedido from '../Pages/Pedido';

function Routes() {
  return (
    <Switch>
      <Route path="/pedido" render={ Pedido } />
      <Route path="/header" render={ Header } />
    </Switch>
  );
}

export default Routes;
