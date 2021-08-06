import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import ConfirmacaoPage from './Pages/ConfirmacaoPage';
import CarrinhoPage from './Pages/CarrinhoPage'

function Routes() {
  return (
    <BrowserRouter>
        <Route path='/Login' component={Login} />
        <Route exact path='/' component={MainPage} />
        <Route path='/Confirmacao' component={ConfirmacaoPage} />
        <Route path='/Carrinho' component={CarrinhoPage} />
    </BrowserRouter>
  );
}

export default Routes;