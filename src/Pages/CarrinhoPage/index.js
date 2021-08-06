import React from 'react';
import {HeaderContainer} from '../../Components/Header'
import {ContainerPage, ContainerMain, ContainerConfirmacao, ContainerProdutos, ContainerButton} from './style'
import Input from '../../Components/Input'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom';

function CarrinhoPage() {

  return (
    <ContainerPage>
        <HeaderContainer><h1>Enquadrados</h1></HeaderContainer>
        <ContainerMain>
            <ContainerConfirmacao>
                <h1>Seus Dados:</h1>   
                <ContainerProdutos>
                    <Input placeholder="Nome Completo"></Input>
                    <Input placeholder="E-Mail"></Input>
                    <section>
                        <Input placeholder="Endereço" id="endereco"></Input>  
                        <Input placeholder="Número" id="numero"></Input>
                    </section>
                    <Input placeholder="Cidade"></Input>
                </ContainerProdutos>
                <ContainerProdutos></ContainerProdutos>
                <ContainerButton>
                    <button className="buttonSubmit" type="submit"><Link to="/">Voltar as Compras</Link></button>
                    <button className="buttonSubmit" type="submit"><Link to="/Confirmacao">Finalizar Compra</Link></button>
                </ContainerButton>
            </ContainerConfirmacao>
        </ContainerMain>        
        <Footer></Footer>
    </ContainerPage>
  );
}

export default CarrinhoPage;