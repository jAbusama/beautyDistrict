import React from 'react'
import product1 from '../images/products/perfumes/product1.jpg'
import product2 from '../images/products/perfumes/product2.jpg'
import product3 from '../images/products/perfumes/product3.jpg'
import product4 from '../images/products/perfumes/product4.jpg'
import product5 from '../images/products/perfumes/product5.jpg'
import product6 from '../images/products/perfumes/product6.jpg'
import product7 from '../images/products/perfumes/product7.jpg'

import product9 from '../images/products/perfumes/product9.jpg'
import product10 from '../images/products/perfumes/product10.jpg'

export const Images = {
  beautyProduct,
  perfumes
}

function beautyProduct() {}

function perfumes() {
  return (
    <div className='card'>
      <img src={product1} alt='' className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>Product1</h5>
        <p className='card-text'>This is the definition of product</p>
      </div>
    </div>
  )
}
