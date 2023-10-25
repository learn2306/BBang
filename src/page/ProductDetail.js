import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Header from '../component/Header'
import Navbar from '../component/Navbar'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductsDetail = async() => {
    /* let url = `http://localhost:5000/products/${id}` */ /* 데이터확인O */
    let url = `https://my-json-server.typicode.com/learn2306/meal/products/${id}`

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    getProductsDetail()
  }, []) 

  return (
    <>
    <Header />   
    <Navbar />
    <Row className='product-detail'>
      <Col className='product-img'>
        <img src={product?.img} alt='' />
      </Col>
      <Col className='detail-info'>
        <div className='best'>
          {product?.best===true?'[베스트상품]':''}
        </div>
        <div className='title'>{product?.title}</div>
        <div className='content'>{product?.content}</div>
        <div className='price'>{product?.price}</div>
        <div className='choice'>{product?.choice===true?'Conscious Choice':''}</div>

        <Form.Select>
          <option>상품종류</option>
          <option value='1'>단품</option>
          <option value='2'>10개 세트</option>
          <option value='3'>혼합상품</option>
        </Form.Select>

        <Button /* variant="success" */>사먹을 생각</Button>        
      </Col>
    </Row>
    </>
  )
}

export default ProductDetail