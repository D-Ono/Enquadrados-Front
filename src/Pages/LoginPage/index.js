import React, {useState} from 'react';
import {HeaderContainer} from '../../Components/Header'
import {ContainerPage, ContainerMain, ContainerLoginCadastro} from './style'
import Input from '../../Components/Input'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { message } from 'antd';
import { login } from '../../Services/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', {
                email,
                password
            });
            console.log(response);
            if(response.status === 200) {
                login(response.data.token);
                message.destroy("logging");
            }

        } catch(error) {
            console.log(error);
            message.destroy("logging")
        }
    }

  return (
    <ContainerPage>
        <HeaderContainer><h1>Enquadrados</h1></HeaderContainer>
        <ContainerMain>
            <ContainerLoginCadastro>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Email"
                        onChange = {(e)=> setEmail(e.target.value)}
                        required
                    />
                    <Input 
                        placeholder="Senha" 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="buttonSubmit" type="submit">Entrar</button>
                </form>
            </ContainerLoginCadastro>
        </ContainerMain>        
        <Footer></Footer>
    </ContainerPage>
  );
}

export default Login;