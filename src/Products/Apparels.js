import React from 'react'
import beauty1 from '../images/products/beautyProducts/beauty1.jpg'
import beauty2 from '../images/products/beautyProducts/beauty2.jpeg'
import beauty3 from '../images/products/beautyProducts/beauty3.jpg'
import beauty4 from '../images/products/beautyProducts/beauty4.jpg'
import beauty5 from '../images/products/beautyProducts/beauty5.jpg'
import beauty6 from '../images/products/beautyProducts/beauty6.jpg'
import beauty7 from '../images/products/beautyProducts/beauty7.jpg'
import beauty8 from '../images/products/beautyProducts/beauty8.jpg'
import beauty9 from '../images/products/beautyProducts/beauty9.jpg'
import beauty10 from '../images/products/beautyProducts/beauty10.jpg'
import beauty11 from '../images/products/beautyProducts/beauty11.jpg'
import beauty12 from '../images/products/beautyProducts/beauty12.jpg'
import beauty13 from '../images/products/beautyProducts/beauty13.jpg'
import beauty14 from '../images/products/beautyProducts/beauty14.jpg'
import beauty15 from '../images/products/beautyProducts/beauty15.jpg'
import beauty16 from '../images/products/beautyProducts/beauty16.jpg'

import Bags from './Apparels/Bags'
import Waches from './Apparels/Watches'
import Shoes from './Apparels/Shoes'
import Dress from './Apparels/Dress'
function Apparels({ match }) {
  //console.log(match)
  //localStorage.setItem('url', match.path)
  //console.log(match.path)
  return (
    <React.Fragment>
      <div className='container-fluid padding' id='products'>
        <div className='row text-center'>
          <div className='col-12 welcome'>
            <h1 className='display-3'>Apparels</h1>
          </div>
        </div>
        {/* pict */}
        <Bags />
        {/* pict */}
        <Waches />
        {/* pict */}
        <Shoes />
        {/* pict */}
        <Dress />
      </div>
    </React.Fragment>
  )
}
export default Apparels
