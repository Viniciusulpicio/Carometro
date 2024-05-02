import React from 'react'
import Navbar from '../NavBar/Navbar'
import Header from '../Header/Header'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header
      texto="CAROMETRO"/>
      <div className="geralHome">
        <Navbar/>

      </div>
      </div>
  )
}

export default Home