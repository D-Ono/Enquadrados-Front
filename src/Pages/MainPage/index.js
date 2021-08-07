import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import {HeaderContainer} from '../../Components/Header'
import {ContainerPage, ContainerMain, ContainerProdutos, ContainerButtons} from './style'
import Produto from '../../Components/Produto'
import Footer from '../../Components/Footer'
import {Link} from 'react-router-dom';

function MainPage() {
  const [ products, setProducts ] = useState([]);
  const [ page, setPage ] =  useState(1);
  const limit = 6;
  const [ hasMoreProducts, setHasMoreProducts ] = useState(true);
  const [activeFilter, setActiveFilter] = useState('');
  
  async function getProducts(page, limit, category) {
    const response = await api.get('products/', {
      params: {
        page: page,
        limit: limit,
        category: category
      }
    });
    console.log(response);

    try {
      if(response.status === 200) {
        if(page === 1)
          setProducts(response.data);
        else setProducts(products.concat(response.data));
      }

      if(response.data.length < limit)
        setHasMoreProducts(false);
      else setHasMoreProducts(true);

    } catch(error) {
      console.log(error);
      setHasMoreProducts(false);
    }
  }    

  function filterByCategory(category) {
    setPage(1);

    if(category === activeFilter) {
      setActiveFilter('');
      getProducts(1, limit);
    } else {
      setActiveFilter(category);
      getProducts(1, limit, category);
    }
  }

  function loadMoreProducts() {
    const newPage = page + 1;
    getProducts(newPage, limit);
    setPage(newPage);
  }

  useEffect(() => {
    getProducts(page, limit);
  }, []);

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