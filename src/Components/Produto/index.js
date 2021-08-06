import React from "react";
import {
	ContainerProduto,
	ContainerProdutoInfos,
	ProdutoButton,
    ContainerButton
} from "./style";

const Produto = (props) => {
	return (
		<ContainerProduto>
				<ContainerProdutoInfos>
					<div>TEXTO</div>
					<div>R$15,00</div>
					<ContainerButton >
                        <ProdutoButton>
                            Adicionar ao Carrinho
                        </ProdutoButton>
                    </ContainerButton>
				</ContainerProdutoInfos>
		</ContainerProduto>
	);
};

export default Produto;