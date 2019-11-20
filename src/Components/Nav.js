import React from 'react'
import logo from '../images/logo/logo.png'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark sticky-top'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  PRODUCTS
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='about_us'></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about_us'>
                  ABOUT US
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact_us'>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
export default Nav
