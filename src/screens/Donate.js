import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Donate = () => {
    return (
      <div class="body-spacing">
          <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
          <h2 class="page-title">Donate</h2>
          <hr class="hr-top" />
          <hr class="hr-bottom" />
          <div class="nav-img-text-container">
          <a href="https://jrg.gop/donate" target="_blank"><img src="/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
          <div class="nav-img-text-centered"><a class="nav-img-text-style" href="https://jrg.gop/donate" target="_blank">Donate Online</a></div>
          </div>
          <BottomNavBar name='donate' />
      </div>
    )
}

export default Donate
