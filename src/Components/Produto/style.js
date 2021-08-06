import styled from "styled-components";

export const Imagem = styled.div`
	img {
		width: 100%;
		height: auto;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
`;

export const ContainerProduto = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
	margin: 0.5rem;
	word-wrap: break-word;
	background-color: #263240;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	a {
		text-decoration: none;
		color: #ffffff;
	}
`;

export const ContainerProdutoInfos = styled.div`
    height: 450px;
    width: 270px;
	padding: 0 5px 2px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ContainerButton = styled.div`
    height: 5rem;
    width: 100%;
	padding: 0 5px 2px;
`;

export const ProdutoButton = styled.button`
	background-color: black;
	height: 5rem;
	color: white;
	width: 100%;
	border-radius: 5px;
	border: 1px solid #ffffff;
	cursor: pointer;
`;