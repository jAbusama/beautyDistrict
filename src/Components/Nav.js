import React from 'react'
import logo from '../images/logo/logo.png'
import { Link } from 'react-router-dom'
import DdProducts from '../Components/Dropdown/DdProducts'
function Nav() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item dropdown'>
                <DdProducts />
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='#about_us'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#contact_us'>
                  Contact Us
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
