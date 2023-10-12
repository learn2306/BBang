import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/product/${item.id}`) /* 데이터확인 */
	}

  return (
	<div className='product-list' onClick={showDetail}>
		<div className='product-img'><img src={item?.img} alt='' /></div>
		<div className='choice'>{item?.choice===true?'Conscious Choice':''}</div>
		<div className='title'>{item?.title}</div>
		<div className='price'>{item?.price}</div>
		<div className='best'>{item?.best===true?'[베스트상품]':''}</div>
	</div>
  )
}

export default ProductCard