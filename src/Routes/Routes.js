import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Provider from '../Context/Provider';
import Pedido from '../Pages/Pedido';

function Routes() {
  return (
    <Provider>
      <Switch>
        <Route path="/pedido" render={ Pedido } />
        <Route path="/header" render={ Header } />
      </Switch>
    </Provider>
  );
}

export default Routes;
