import React from 'react'
import pic1 from '../images/carousel/pic1.jpg'
import pic2 from '../images/carousel/pic2.jpg'
import pic3 from '../images/carousel/pic3.jpg'
import pic4 from '../images/carousel/pic4.png'
function ImageSlider() {
  return (
    <React.Fragment>
      <div className='carousel slide' id='slides' data-ride='carousel'>
        <ul className='carousel-indicators'>
          <li data-target='#slides' data-slide-to='0' className='active'></li>
          <li data-target='#slides' data-slide-to='1'></li>
          <li data-target='#slides' data-slide-to='2'></li>
          <li data-target='#slides' data-slide-to='3'></li>
        </ul>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={pic4} alt='' className='img-fluid' />
            <div className='carousel-caption'>
              <h3>Makes you beautiful</h3>
              <button type='button' className='btn btn-outline-light btn-lg'>
                Shop
              </button>
              <button className='btn btn-primary btn-lg' type='button'>
                Contact Us
              </button>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={pic1} alt='' className=' img-fluid' />
          </div>
          <div className='carousel-item'>
            <img src={pic2} alt='' className=' img-fluid d-block w-100' />
          </div>
          <div className='carousel-item '>
            <img src={pic3} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ImageSlider
