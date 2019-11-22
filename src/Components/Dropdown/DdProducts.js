import React, { UseState } from 'react'
import { Link } from 'react-router-dom'
function DdProducts() {
  // const [isOpen, updateStatus] = UseState(false)
  return (
    <React.Fragment>
      <a
        className='nav-link dropdown-toggle'
        href='#'
        id='navbarDropdown'
        role='button'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        Products
      </a>
      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <Link to='/beauty_products' className='dropdown-item'>
          Beauty Products
        </Link>
        <Link to='/perfumes' className='dropdown-item'>
          Perfumes
        </Link>
        <Link to='/apparels' className='dropdown-item'>
          Apparels
        </Link>
      </div>
    </React.Fragment>
  )
}
export default DdProducts
