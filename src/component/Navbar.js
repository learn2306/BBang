import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate();
	const search = (e) => {
		if (e.key === "Enter") {
			let keyword = e.target.value;
			navigate(`/productAll?q=${keyword}`) /* /work/productAll->/productAll 12, 데이터확인O, productAll/의 '/'상관없음 */		
		}
	}
	
  return (
	<>
	<div className='nav-header'>
		<div className='navcont'>
			<div className='logo'>
				<Link to='/productAll'>{/*  */}
					<img src={require('../logo.jpg')} alt='로고' />{/* public폴더외서 불러오기 */}					
					{/* <img src={ process.env.PUBLIC_URL + 'img/logo.jpg' } alt='로고' /> */}
				</Link>				
			</div>
			<div className='login'><span>로그인</span></div>
			<div className='meal'>
				<div className='menu'>
					<ul>
						<li>가을추천빵</li>
						<li>베스트</li>
						<li>신상품</li>
					</ul>
				</div>
				<div className='search-area'>
					<input type="text" placeholder="상품검색" onKeyDown={(e) => search(e)} />
				</div>
			</div>
		</div>
	</div>	
	</>	
  )
}

export default Navbar