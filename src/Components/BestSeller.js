import React from 'react'
import best1 from '../images/carousel/pic2.jpg'
function BestSeller() {
  return (
    <React.Fragment>
      <div className='container-fluid-padding'>
        <div className='row padding'>
          <div className='col-md-12 col-lg-6'>
            <h2>Owner Info..</h2>
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
          <div className='col-lg-6'>
            <img src={best1} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BestSeller
