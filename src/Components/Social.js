import React from 'react'
import { Link } from 'react-router-dom'
function Social() {
  return (
    <React.Fragment>
      <div className='container-fluid padding'>
        <div className='row text-center padding'>
          <div className='col-12'>
            <h2>Social</h2>
          </div>
          <div className='col-12 social padding'>
            <Link to='facebook.com'>
              <i className='fab fa-facebook'></i>
            </Link>
            <Link to='gmail.com'>
              <i className='fab fa-google-plus-g'></i>
            </Link>
            <Link to='youtube.com'>
              <i className='fab fa-youtube'></i>
            </Link>
            <Link to='instagram.com'>
              <i className='fab fa-instagram'></i>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Social
