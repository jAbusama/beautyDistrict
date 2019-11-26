import React, { useState } from 'react'
import product1 from '../images/products/perfumes/product1.jpg'
import product2 from '../images/products/perfumes/product2.jpg'
import product3 from '../images/products/perfumes/product3.jpg'
import product4 from '../images/products/perfumes/product4.jpg'
import product5 from '../images/products/perfumes/product5.jpg'
import product6 from '../images/products/perfumes/product6.jpg'
import product7 from '../images/products/perfumes/product7.jpg'
import product9 from '../images/products/perfumes/product9.jpg'
import product10 from '../images/products/perfumes/product10.jpg'
import product11 from '../images/products/perfumes/product11.jpg'
import product12 from '../images/products/perfumes/product12.jpg'
import product13 from '../images/products/perfumes/product13.jpg'
import product14 from '../images/products/perfumes/product14.jpg'
import product15 from '../images/products/perfumes/product15.jpg'
import { Images } from '../Components/Images'
import { returnStatement } from '@babel/types'
function Perfumes() {
  return (
    <React.Fragment>
      <div className='container-fluid padding' id='products'>
        <div className='row text-center'>
          <div className='col-12 welcome'>
            <h1 className='display-3'>Perfumes</h1>
          </div>
        </div>
        {/* pict */}
        <div className='img-thumbnail'>
          <span className='badge badge-warning'>Best Seller</span>
          <div className='row'>
            <div className='card-group col-sm-12 col-md-12'>
              <div className='card'>
                <img
                  src={product1}
                  alt='Perfume Products 1'
                  className='card-img-top img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={product2}
                  alt='Perfume Products 2'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product2</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={product3}
                  alt='Perfume Products 3'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product3</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={product4}
                  alt='Perfume Products 4'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product4</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={product5}
                  alt='Perfume Products 5'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product5</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pict */}
        <div className='img-thumbnail'>
          <span className='badge badge-success'>New Arrivals</span>
          <div className='row'>
            <div className='card-group  col-sm-12 col-md-12'>
              <div className='card'>
                <img
                  src={product6}
                  alt='Perfume Products 6'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={product7}
                  alt='Perfume Products 7'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product2</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={product11}
                  alt='Perfume Products 8'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product3</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={product9}
                  alt='Perfume Products 9'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product4</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={product10}
                  alt='Perfume Products 10'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product5</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pict */}
        <div className='img-thumbnail'>
          <span className='badge badge-danger'>On Sale!!!</span>
          <div className='row '>
            <div className='card-group rounded col-sm-12 col-md-12'>
              <div className='card'>
                <img
                  src={product11}
                  alt='Perfume Products 11'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={product12}
                  alt='Perfume Products 12'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product2</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={product13}
                  alt='Perfume Products 13'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product3</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={product14}
                  alt='Perfume Products 4'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product4</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={product15}
                  alt='Perfume Products 15'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product5</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Perfumes
