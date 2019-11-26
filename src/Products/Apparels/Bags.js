import React from 'react'
import bag1 from '../../images/products/Apparels/bag/bag1.jpg'
import bag2 from '../../images/products/Apparels/bag/bag2.jpg'
import bag3 from '../../images/products/Apparels/bag/bag3.jpg'
import bag4 from '../../images/products/Apparels/bag/bag4.jpg'
import bag5 from '../../images/products/Apparels/bag/bag5.jpg'
export default props => (
  <React.Fragment>
    <div className='img-thumbnail'>
      <span className='badge badge-warning'>Bags</span>
      <div className='row'>
        <div className='card-group col-sm-12 col-md-12'>
          <div className='card'>
            <img src={bag1} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>Bag1</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={bag2} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>Bag2</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={bag3} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>Bag3</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={bag4} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>Bag4</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={bag5} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>Bag5</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)
