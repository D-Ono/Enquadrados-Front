import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './Pages/LoginPage';
import Cadastro from './Pages/CadastroPage';
import MainPage from './Pages/MainPage';
import ConfirmacaoPage from './Pages/ConfirmacaoPage';
import CarrinhoPage from './Pages/CarrinhoPage'

function Routes() {
  return (
    <BrowserRouter>
        <Route path='/Login' component={Login} />
        <Route path='/Cadastro' component={Cadastro} />
        <Route exact path='/' component={MainPage} />
        <Route path='/Confirmacao' component={ConfirmacaoPage} />
        <Route path='/Carrinho' component={CarrinhoPage} />
    </BrowserRouter>
  );
}

export default Routes;