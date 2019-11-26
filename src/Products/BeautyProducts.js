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

function BeautyProducts({ match }) {
  //console.log(match)
  //localStorage.setItem('url', match.path)
  //console.log(match.path)
  return (
    <React.Fragment>
      <div className='container-fluid padding' id='products'>
        <div className='row text-center'>
          <div className='col-12 welcome'>
            <h1 className='display-3'>Beauty Products</h1>
          </div>
        </div>
        {/* pict */}
        <div className='img-thumbnail'>
          <span className='badge badge-warning'>Best Seller</span>
          <div className='row'>
            <div className='card-group col-sm-12 col-md-12'>
              <div className='card'>
                <img
                  src={beauty1}
                  alt='Beauty Products 1'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>beauty1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={beauty12}
                  alt='Beauty Products 2'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>beauty1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={beauty3}
                  alt='Beauty Products 3'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product3</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={beauty4}
                  alt='Beauty Products 4'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product4</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={beauty5}
                  alt='Beauty Products 5'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product5</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pict */}
        <div className='img-thumbnail'>
          <span className='badge badge-success'>New Arrivals</span>
          <div className='row'>
            <div className='card-group col-sm-12 col-md-12'>
              <div className='card'>
                <img
                  src={beauty6}
                  alt='Beauty Products 6'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>beauty1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={beauty7}
                  alt='Beauty Products 7'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>beauty1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={beauty8}
                  alt='Beauty Products 8'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product3</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={beauty9}
                  alt='Beauty Products 9'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product4</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={beauty10}
                  alt='Beauty Products 10'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product5</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pict */}
        <div className='img-thumbnail'>
          <span className='badge badge-danger'>On Sale!!!</span>
          <div className='row'>
            <div className='card-group col-sm-12 col-md-12'>
              <div className='card'>
                <img
                  src={beauty11}
                  alt='Beauty Products 11'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>beauty1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={beauty12}
                  alt='Beauty Products 12'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>beauty1</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>

              <div className='card'>
                <img
                  src={beauty13}
                  alt='Beauty Products 13'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product3</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={beauty14}
                  alt='Beauty Products 14'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product4</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src={beauty15}
                  alt='Beauty Products 15'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Product5</h5>
                  <p className='card-text'>This is the definition of product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BeautyProducts
