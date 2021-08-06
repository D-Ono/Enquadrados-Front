import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  h1{
    padding:4rem;
  }
  img{
    width: 200px;
    height: 200px;
  }
`;

export const ContainerMain = styled.div`
  width: 100vw;
  height: 130vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerConfirmacao = styled.div`
  width: 80vw;
  height: 120vh;
  margin-top: 5rem;
  margin-bottom: 6rem;
  background-color: #E5E5E5;
  border-radius: 0.4rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h3{
      padding:15px;
  }
  form{
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .buttonSubmit {
    width: 20rem;
    height: 5rem;
    background: var(--color-button-background);
    color: var(--color-highlight-text);
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
    margin: 2rem;
  }
  .buttonSubmit:hover {
    opacity: 0.8;
  }
`;

export const ContainerProdutos = styled.div`
  width: 80vw;
  height: 40vh;
  border-radius: 0.4rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  section{
      width: 70%;
      display: flex;
      flex-direction: row;
  }
  h3{
      padding:15px;
  }
  #endereco{
    display: flex;
    margin-left: 50px;
    width: 100%;
  }
  #numero{
      width: 30%;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
