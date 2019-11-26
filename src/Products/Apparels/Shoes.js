import React from 'react'
import shoes1 from '../../images/products/Apparels/shoes/shoes1.jpg'
import shoes2 from '../../images/products/Apparels/shoes/shoes2.jpg'
import shoes3 from '../../images/products/Apparels/shoes/shoes3.jpg'
import shoes4 from '../../images/products/Apparels/shoes/shoes4.jpg'
import shoes5 from '../../images/products/Apparels/shoes/shoes5.jpg'
export default props => (
  <React.Fragment>
    <div className='img-thumbnail'>
      <span className='badge badge-success'>Shoess</span>
      <div className='row'>
        <div className='card-group col-sm-12 col-md-12'>
          <div className='card'>
            <img src={shoes1} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>shoes1</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={shoes2} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>shoes2</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>

          <div className='card'>
            <img src={shoes3} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>shoes3</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={shoes4} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>shoes4</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
          <div className='card'>
            <img src={shoes5} alt='' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>shoes5</h5>
              <p className='card-text'>This is the definition of product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)
