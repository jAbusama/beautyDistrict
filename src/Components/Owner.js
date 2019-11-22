import React from 'react'
import dev1 from '../images/devs/dev1.jpeg'
function Owner() {
  return (
    <React.Fragment>
      <div className='container-fluid padding'>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <h2>Owner Info..</h2>
            <hr />
            <p>
              {' '}
              asdjasjk daksdjkhajsk dakjshdjkah askd kadlkasd dajdklas
              dajkdaskjdhasdl as daskdaks j dajs da sdasjkhdk as ika
            </p>
            <p>
              dahsjdhka ahksdk ad adk kask dasdah akdj dakdjakd iakl dasd lkasdk
              kjadkjas dakhs
            </p>
            <p>
              asdklja skld dajsdklalk djafawiuq fiowheuigf ajs hiucqwuh cnck
              foiqwqw ijdkaskjhwdq
            </p>
          </div>
          <div className='col-md-12 col-lg-6 text-center'>
            <img src={dev1} alt='' className='img-fluid' />
          </div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  )
}
export default Owner
