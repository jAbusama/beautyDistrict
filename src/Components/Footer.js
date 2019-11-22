import React from 'react'
import logo from '../images/logo/logo.png'
function Footer() {
  return (
    <React.Fragment>
      <div
        className='container-fluid bg-dark text-light padding'
        id='contact_us'>
        <div className='row text-center'>
          <div className='col-md-4'>
            <img src={logo} alt='' />
            <hr className='light' />
            <p>444-444-444</p>
            <p>email@gmail.com</p>
            <p>100 street Davao</p>
            <p>Davao City 8000</p>
          </div>
          <div className='col-md-4'>
            <hr className='light' />
            <h5>Our Hours</h5>
            <hr className='light' />
            <p>Monday-Friday: 9am-6pm</p>
            <p>Saturday: 10am-5pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className='col-md-4'>
            <hr className='light' />
            <h5>Our Hours</h5>
            <hr className='light' />
            <p>444-444-444</p>
            <p>email@gmail.com</p>
            <p>100 street Davao</p>
            <p>Davao City 8000</p>
          </div>
          <div className='col-12'>
            <hr className='light-100' />
            <h5>&copy; beautydistrict.com</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Footer
