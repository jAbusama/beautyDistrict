import React from 'react'
import pic1 from '../images/carousel/pic1.jpg'
import pic2 from '../images/carousel/pic2.jpg'
import pic4 from '../images/carousel/pic5.jpg'
import pic5 from '../images/products/perfumes/product5.jpg'
import pic3 from '../images/products/perfumes/product14.jpg'
import dress1 from '../images/carousel/dress1.jpg'
function ImageSlider(props) {
  //console.log(props)
  return (
    <React.Fragment>
      <div
        className='carousel slide ustify-content-center'
        id='slides'
        data-ride='carousel'>
        <ul className='carousel-indicators'>
          <li data-target='#slides' data-slide-to='0' className='active'></li>
          <li data-target='#slides' data-slide-to='1'></li>
          <li data-target='#slides' data-slide-to='2'></li>
          <li data-target='#slides' data-slide-to='3'></li>
        </ul>
        <div className='carousel-inner j text-center'>
          <div className='carousel-item active'>
            <img src={dress1} alt='arouselperfume 1' className='img-fluid' />
            <div className='carousel-caption'>
              <h1 className='display-2'>Beauty District</h1>
              <h3>Makes you beautiful</h3>
              <button type='button' className='btn btn-outline-dark btn-lg'>
                Shop
              </button>
              <button className='btn btn-primary btn-lg' type='button'>
                <a href='/#contact_us' className='contact'>
                  {' '}
                  Contact Us
                </a>
              </button>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={pic5} alt='carouselperfume 2' className=' img-fluid' />
          </div>
          <div className='carousel-item'>
            <img
              src={pic3}
              alt='arouselperfume 3'
              className=' img-fluid d-block w-100'
            />
          </div>
          <div className='carousel-item '>
            <img src={pic2} alt='arouselperfume 4' className='img-fluid' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ImageSlider
