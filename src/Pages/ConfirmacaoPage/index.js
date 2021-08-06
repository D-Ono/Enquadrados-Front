import React from 'react';
import {HeaderContainer} from '../../Components/Header'
import {ContainerPage, ContainerMain, ContainerConfirmacao} from './style'
import Footer from '../../Components/Footer'

function ConfirmationPage() {

  return (
    <ContainerPage>
        <HeaderContainer><h1>Enquadrados</h1></HeaderContainer>
        <ContainerMain>
            <ContainerConfirmacao>
                <h1>Confirmando os Dados:</h1>                
                <ContainerConfirmacao></ContainerConfirmacao>
                <h3>O Prazo para entrega é de 6 dias! Obrigado pela Compra!</h3>
            </ContainerConfirmacao>
        </ContainerMain>        
        <Footer></Footer>
    </ContainerPage>
  );
}

export default ConfirmationPage;