import React from 'react'

function Icons() {
  return (
    <React.Fragment>
      <div className='container-fluid jumbotron '>
        <div className='row text-center '>
          <div className='col-xs-12 col-sm-6 col-md-4 padding'>
            <i className='fas fa-dollar-sign'></i>
            <h3 className='blue'>Affordable</h3>
            <p>We serve the best beauty</p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 padding'>
            <i className='far fa-thumbs-up '></i>
            <h3 className='red'>High Quality</h3>
            <p>We serve the best beauty</p>
          </div>
          <div className='col-sm-12 col-md-4 padding'>
            <i className='fas fa-sync '></i>
            <h3 className='brown'>Good Service</h3>
            <p>We serve the best beauty</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Icons
