import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeServer from '../Pages/HomeServer';
import Provider from '../Context/Provider';
import Pedido from '../Pages/Pedido';
import FinalizarPedido from '../Components/FinalizarPedido';
import Pedidos from '../Components/Pedidos';


function Routes() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/pedido" render={ Pedido } />
        <Route exact path="/pedido-server" render={HomeServer} />
        <Route exact path="/pedido-server/finalizar" render={FinalizarPedido} />
        <Route exact path="/pedido-server/pedidos" render={ Pedidos } />
      </Switch>
    </Provider>
  );
}

export default Routes;
