import React from 'react'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import ProductRating from './ProductRating'

const ProductDetails = ({name,price,rating}) => {
  return (
    <div style={{border:"2px solid black", padding:"30px",marginBottom:"20px",borderRadius:"30px"}}>
      <ProductName pname={name}/>
      <ProductPrice pprice={price}/>
      <ProductRating prating={rating}/>
    </div>
  )
}

export default ProductDetails
