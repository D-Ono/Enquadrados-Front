import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
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
  height: 80vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerConfirmacao = styled.div`
  width: 80vw;
  height: 70vh;
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
`;