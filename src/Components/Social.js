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
            <a href='facebook.com'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='instagram.com'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='gmail.com'>
              <i className='fab fa-google-plus-g'></i>
            </a>
            <a href='youtube.com'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Social
