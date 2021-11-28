import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Donate = () => {
    return (
      <div class="body-spacing">
          <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
          <h2 class="page-title">Donate</h2>
          <div class="nav-img-text-container">
          <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
          <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">The Flight Plan</a></div>
          </div>
          <div class="nav-img-text-container">
          <a href="https://jrg.gop/donate" target="_blank"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
          <div class="nav-img-text-centered"><a class="nav-img-text-style" href="https://jrg.gop/donate" target="_blank">Donate Online</a></div>
          </div>
          <BottomNavBar name='donate' />
      </div>
    )
}

export default Donate
