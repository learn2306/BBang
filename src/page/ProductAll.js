import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom';
import Header from '../component/Header';
import Navbar from '../component/Navbar';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();   
  const getProducts = async() => {
    //let url = `http://localhost:5000/products/`

      let searchQuery = query.get('q')||"";
      console.log(searchQuery)

      /* let url = `http://localhost:5000/products?q=${searchQuery}` */  //데이터확인O        
      let url = `https://my-json-server.typicode.com/learn2306/meal/products?q=${searchQuery}`
      let response = await fetch(url);
      let data = await response.json();
      console.log(data)
      setProductList(data)  
    }

    useEffect(() => {
      getProducts()
    }, [query]);

    return (
      <Container>  
        <Header /> 
        <Navbar />    
        <Row className='produc-list'>
          {
            productList.map((menu, idx) => (
              <Col lg={3} key={idx}>
                <ProductCard item={menu} />             
              </Col>
            ))
          }
        </Row>
      </Container>	
  )
}

export default ProductAll