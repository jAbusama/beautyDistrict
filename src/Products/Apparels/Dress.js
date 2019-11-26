import React from 'react'
import dress1 from '../../images/products/Apparels/dress/dress1.jpg'
import dress2 from '../../images/products/Apparels/dress/dress1.jpg'
import dress3 from '../../images/products/Apparels/dress/dress1.jpg'
import dress4 from '../../images/products/Apparels/dress/dress1.jpg'
import dress5 from '../../images/products/Apparels/dress/dress1.jpg'
export default props => (
  <React.Fragment>
    <div className='img-thumbnail'>
      <span className='badge badge-dark'>dresss</span>
      <div className='row'>
        <div className='card-group col-sm-12 col-md-12'>
          <div className='card'>
            <img src={dress1} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>dress1</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={dress2} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>dress2</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={dress3} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>dress3</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={dress4} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>dress4</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={dress5} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>dress5</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)
