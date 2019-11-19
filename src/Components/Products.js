import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <React.Fragment>
      <div className='container-fluid padding'>
        <div className='row text-center padding'>
          <div className='col-12'>
            <h1 className='display-4'>Products</h1>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='card'>
              <img src='' alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product1</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='card'>
              <img src='' alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product2</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='card'>
              <img src='' alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product3</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='card'>
              <img src='' alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Product4</h5>
                <p className='card-text'>This is the definition of product</p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 mt-2'>
            <button className='btn btn-link btn-lg'>
              <Link to='/products'>See more..</Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Products
