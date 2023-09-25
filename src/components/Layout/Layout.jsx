import React, { Component } from 'react'
import Header from '../Header/Header'
import Herosection from '../Herosection/Herosection'
import Aboutsection from '../Aboutsection/Aboutsection'
import Infosection from '../Informationsection/Infosection'
import Teamsection from '../Teamsection/Teamsection'
import Newssection from '../Newssection/Newssection'
import Footer from '../Footer/Footer'
import Certificatessection from '../Certificatesection/Certificatessection'
import Productssection from '../Productssection/Productssection'

export default class MyLayout extends Component {
  render() {
    return (
     <div>
      <Header/>
        <Herosection/>
        <Aboutsection/> 
        <Certificatessection/>
        <Productssection/>
        <Infosection/>
        <Teamsection/>
        <Newssection/>
        <Footer/>
     </div>
    )
  }
}

// hero end

// everything is ok 1 2 3  5
