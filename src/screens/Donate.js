import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Donate = () => {
    return (
      <div>
          <h1>donate</h1>
          <div class="nav-img-text-container">
          <a href="https://jrg.gop/donate" target="_blank"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
          <div class="nav-img-text-centered"><a style="text-decoration: none; text-decoration-color: white;" href="https://jrg.gop/donate" target="_blank">Donate Online</a></div>
          </div>
          <BottomNavBar name='donate' />
      </div>
    )
}

export default Donate
