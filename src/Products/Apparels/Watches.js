import React from 'react'
import watches1 from '../../images/products/Apparels/watches/watches1.jpg'
import watches2 from '../../images/products/Apparels/watches/watches2.jpg'
import watches3 from '../../images/products/Apparels/watches/watches3.jpg'
import watches4 from '../../images/products/Apparels/watches/watches4.jpg'
import watches5 from '../../images/products/Apparels/watches/watches5.jpg'
export default props => (
  <React.Fragment>
    <div className='img-thumbnail'>
      <span className='badge badge-primary'>watchess</span>
      <div className='row'>
        <div className='card-group col-sm-12 col-md-12'>
          <div className='card'>
            <img src={watches1} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>watches1</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={watches2} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>watches2</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={watches3} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>watches3</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={watches4} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>watches4</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={watches5} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>watches5</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)
