import React from 'react'
import logo from '../images/logo/logo.png'
import { Link } from 'react-router-dom'
import DdProducts from '../Components/Dropdown/DdProducts'
import { link } from 'fs'
function Nav({ props }) {
  console.log(props)
  const url = () => {
    // if(localStorage.url="/beauty_products"){
    //   let url =
    // }
  }
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
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <DdProducts />
              </li>
              <li className='nav-item'>
                {props.match.path === '/' ? (
                  <a className='nav-link' href='/#about_us'>
                    About Us
                  </a>
                ) : (
                  <a
                    className='nav-link'
                    onClick={() => props.history.push('/#about_us')}>
                    About Us
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
export default Nav
