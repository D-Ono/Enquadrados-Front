import React, {useState} from 'react';
import {HeaderContainer} from '../../Components/Header'
import {ContainerPage, ContainerMain, ContainerLoginCadastro} from './style'
import Input from '../../Components/Input'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { message } from 'antd';

function LoginCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        message.loading({
            key: "logging",
            content: "Logando...",
            duration: 9999
        })
        try{
            const res = await api.post('login', {
                email,
                password
            });
            console.log(res)
            message.destroy("logging");
        }catch(error){
            console.log(error);
            message.destroy("logging");

        }
    }

  return (
    <ContainerPage>
        <HeaderContainer><h1>Enquadrados</h1></HeaderContainer>
        <ContainerMain>
            <ContainerLoginCadastro>
                <h1>Cadastre-se</h1>                
                <form >
                    <Input placeholder="Nome Usuario"></Input>
                    <Input placeholder="E-mail"></Input>
                    <Input placeholder="Senha" type="password"></Input>
                    <button className="buttonSubmit" type="submit"><Link to="/">Cadastrar</Link></button>
                </form>
            </ContainerLoginCadastro>
            <ContainerLoginCadastro>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Nome do Usuario"
                        type="name"
                        onChange = {(e)=> setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Senha" 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="buttonSubmit" type="submit"><Link to="/">Entrar</Link></button>
                </form>
            </ContainerLoginCadastro>
        </ContainerMain>        
        <Footer></Footer>
    </ContainerPage>
  );
}

export default LoginCadastro;