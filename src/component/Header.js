import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import Navbar from './Navbar'

const Header = () => {
  return (	
	<Container>			
		<div className='header'>
			<Link to='/' className='he-intro'>Intro</Link>
			<Link to='/productAll' className='he-work'>Work</Link>
			<Link to='/story' className='he-story'>Story</Link>
		</div>		
		
	</Container>	
  )
}

export default Header