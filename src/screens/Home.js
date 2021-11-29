import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Home = () => {
    return (
        <div class="body-spacing">
            <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
            <h2 class="page-title">Welcome</h2>
            <hr class="hr-top" />
            <hr class="hr-bottom" />
            <div class="nav-img-text-container">
            <a href="/donate"><img src="/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">The Flight Plan</a></div>
            </div>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">Upcoming Events</a></div>
            </div>
            <BottomNavBar name='home' />
        </div>
    )
}

export default Home
