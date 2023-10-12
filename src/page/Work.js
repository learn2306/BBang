import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import ProductAll from './ProductAll';
import ProductDetail from './ProductDetail';
import Header from '../component/Header';

const Work = () => {
  return (
	<Container>		
		<Header />
		<Routes>
			<Route path='/productAll' element={<ProductAll />} />
			<Route path='/product/:id' element={<ProductDetail />} />
		</Routes>		
	</Container>
	
  )
}

export default Work