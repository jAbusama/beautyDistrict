import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Apparels from './Products/Apparels'
import BeautyProducts from './Products/BeautyProducts'
import Perfumes from './Products/Perfumes'
import ImageSlider from './Components/ImageSlider'
import Welcome from './Components/Welcome'
import Product from './Components/Products'
import Icons from './Components/Icons'
import About from './Components/About'
import Owner from './Components/Owner'
import Team from './Components/TeamNextdapps'
import Social from './Components/Social'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            path='/'
            exact
            render={props => (
              <React.Fragment>
                <Nav props={props} />
                <ImageSlider />
                <Welcome />
                <Product />
                <Icons />
                <Owner />
                <Team />
                <About />
                <Social />
              </React.Fragment>
            )}
          />
          <Route
            path='/beauty_products'
            render={props => (
              <React.Fragment>
                <Nav props={props} />
                <BeautyProducts />
              </React.Fragment>
            )}
          />
          <Route
            path='/perfumes'
            render={props => (
              <React.Fragment>
                <Nav props={props} />

                <Perfumes />
              </React.Fragment>
            )}
          />

          <Route
            path='/apparels'
            render={props => (
              <React.Fragment>
                <Nav props={props} />
                <Apparels />
              </React.Fragment>
            )}
          />
          {/* <Route path='/beauty_products' component={BeautyProducts} />
          <Route path='/perfumes' component={Perfumes} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
