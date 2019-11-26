import React from 'react'
import dev1 from '../images/devs/dev1.jpeg'
import dev2 from '../images/devs/dev2.jpeg'
function TeamNextdapps() {
  return (
    <React.Fragment>
      <div className='container-fluid '>
        <div className='row welcome text-center'>
          <div className='col-12'>
            <h1 className='display-4'>Meet the NextDapps</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className='container-fluid padding'>
        <div className='row '>
          <div className='col-md-4'>
            <div className='card'>
              <img src={dev1} alt='' className='card-img-top' />
              <div className='card-body'>
                <h4 className='card-title'>Frank</h4>
                <p className='card-text'>General Manager</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={dev1} alt='' className='card-img-top' />
              <div className='card-body'>
                <h4 className='card-title'>Jep</h4>
                <p className='card-text'>Software Developer</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={dev1} alt='' className='card-img-top' />
              <div className='card-body'>
                <h4 className='card-title'>Ajie</h4>
                <p className='card-text'>Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TeamNextdapps
