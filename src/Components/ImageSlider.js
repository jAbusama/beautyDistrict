import React from 'react'
import pic1 from '../images/carousel/pic1.jpg'
import pic2 from '../images/carousel/pic2.jpg'
import pic3 from '../images/carousel/pic3.jpg'
function ImageSlider() {
  return (
    <React.Fragment>
      <div className='carousel slide' id='slides' data-ride='carousel'>
        <ul className='carousel-indicators'>
          <li data-target='#slides' data-slide-to='0'></li>
          <li data-target='#slides' data-slide-to='1'></li>
          <li data-target='#slides' data-slide-to='2'></li>
        </ul>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={pic1} alt='' />
          </div>
          <div className='carousel-item'>
            <img src={pic2} alt='' />
          </div>
          <div className='carousel-item '>
            <img src={pic3} alt='' />
          </div>
        </div>
        <a
          href='#slides'
          className='carousel-control-prev'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          href='#slides'
          className='carousel-control-next'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </React.Fragment>
  )
}
export default ImageSlider
