import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import ImageSlider from './Components/ImageSlider'
import Welcome from './Components/Welcome'
import Products from './Components/Products'
import BestSeller from './Components/BestSeller'
import About from './Components/About'
import Owner from './Components/Owner'
import Team from './Components/TeamNextdapps'
import Social from './Components/Social'
import Footer from './Components/Footer'
import DbProducts from './Components/Dropdown/DdProducts'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <ImageSlider />
        <Welcome />
        <BestSeller />
        <Products />
        <Owner />
        <Team />
        <About />
        <Social />
        <Footer />
      </div>
    </Router>
  )
}

export default App
