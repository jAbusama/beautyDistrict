import React, { UseState } from 'react'
import { Link } from 'react-router-dom'
function DdProducts() {
  // const [isOpen, updateStatus] = UseState(false)
  return (
    <React.Fragment>
      <a
        class='nav-link dropdown-toggle'
        href='#'
        id='navbarDropdown'
        role='button'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        Products
      </a>
      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <Link to='' className='dropdown-item'>
          Beauty Products and Apparels
        </Link>
        <Link to='' className='dropdown-item'>
          Perfumes
        </Link>
      </div>
    </React.Fragment>
  )
}
export default DdProducts
