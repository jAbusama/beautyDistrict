import React from 'react'
import beauty1 from '../images/products/beautyProducts/beauty1.jpg'
import beauty2 from '../images/products/beautyProducts/beauty2.jpeg'
import beauty3 from '../images/products/beautyProducts/beauty3.jpg'
import product1 from '../images/products/perfumes/product1.jpg'
import product2 from '../images/products/perfumes/product2.jpg'
import product3 from '../images/products/perfumes/product3.jpg'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <React.Fragment>
      <div className='container-fluid padding' id='products'>
        <div className='row text-center'>
          <div className='col-12'>
            <h1 className='display-4 product'>Products</h1>
          </div>
        </div>
        <div className='row text-center padding'>
          <div className='card-group col-sm-12 col-lg-6'>
            <div className='col-md-12'>
              <h3 className='text-left'>Beauty Products</h3>
            </div>
            <div className='card'>
              <img src={beauty1} alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>

            <div className='card'>
              <img src={beauty2} alt='' className='card-img-top img-fluid' />
              <div className='card-body'>
                <h5 className='card-title'>beauty1</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>

            <div className='card'>
              <img src={beauty3} alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product3</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>
            <div className='col-md-12'>
              <a href='/beauty_products' className='badge badge-secondary'>
                See more...
              </a>
            </div>
          </div>

          <div className='card-group col-sm-12 col-lg-6'>
            <div className='col-md-12'>
              <h3 className='text-left'>Perfumes</h3>
            </div>

            <div className='card'>
              <img src={product1} alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product1</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>

            <div className='card'>
              <img src={product2} alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>beauty1</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>

            <div className='card'>
              <img src={product3} alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product4</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>
            <div className='col-md-12'>
              <Link to='perfumes' className='badge badge-secondary'>
                {' '}
                See more...
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  )
}
export default Products
