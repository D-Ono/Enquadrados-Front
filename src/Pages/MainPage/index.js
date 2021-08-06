import React from 'react';
import {HeaderContainer} from '../../Components/Header'
import {ContainerPage, ContainerMain, ContainerProdutos, ContainerButtons} from './style'
import Produto from '../../Components/Produto'
import Footer from '../../Components/Footer'
import {Link} from 'react-router-dom';

function MainPage() {

  return (
    <ContainerPage>
        <HeaderContainer><h1>Enquadrados</h1></HeaderContainer>
        <ContainerMain>
            <ContainerButtons>
                <button><h3>Categorias</h3></button>
                <button><h3>Filtrar por...</h3></button>
                <button><Link to="/Carrinho"><h3>Carrinho</h3></Link></button>
            </ContainerButtons>
            
            <ContainerProdutos>
                <Produto></Produto>              
                <Produto></Produto>              
                <Produto></Produto>              
                <Produto></Produto>              
                <Produto></Produto>              
                <Produto></Produto>              
            </ContainerProdutos>
        </ContainerMain>        
        <Footer></Footer>
    </ContainerPage>
  );
}

export default MainPage;