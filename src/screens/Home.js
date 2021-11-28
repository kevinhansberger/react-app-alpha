import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a href="/donate">The Flight Plan</a></div>
            </div>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a href="/donate">Upcoming Events</a></div>
            </div>
            <BottomNavBar name='home' />
        </div>
    )
}

export default Home
