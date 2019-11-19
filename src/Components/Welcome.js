import React from 'react'

function Welcome() {
  return (
    <React.Fragment>
      <div className='row jumbotron jumbotron-fluid'>
        <div className='container-fluid padding'>
          <div className='row welcome text-center'>
            <div className='col-12'>
              <h1 className='display-4'>Beauty District</h1>
            </div>
            <hr />
            <div className='col-12'>
              <p className='lead'>
                Wellcome to beauty district we offer beaty product and services
                please visit our office for more info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Welcome
