import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
	<Container>
		<div>
			<div className='intro-area'>
				<h1>내가 좋아하는 대전빵집, 성심당</h1>				
				<Link to='/productAll' className='intro'>들어가기</Link> {/* 12 */}								
				<img src={process.env.PUBLIC_URL + 'img/intro.jpg'} alt='' />			
			</div>
		</div>
	</Container>	
  )
}

export default Intro