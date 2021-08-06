import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  h1{
    padding:4rem;
  }
`;

export const ContainerMain = styled.div`
  width: 100vw;
  height: 180vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  button {
    width: 100%;
    height: 100%;
    background-color: var(--color-header-background);
    color: var(--color-highlight-text);
    border: 0;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
  }
  button:hover {
    opacity: 0.9;
  }
  
`;

export const ContainerProdutos = styled.div`
  width: 80vw;
  height: 150vh;
  margin-top: 5rem;
  margin-bottom: 6rem;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: #E5E5E5;
  border-radius: 0.4rem;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  
`;

export const ContainerButtons = styled.div`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
