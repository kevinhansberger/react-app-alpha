import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered">The Flight Plan</div>
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered">Upcoming Events</div>
            </div>
            <BottomNavBar name='home' />
        </div>
    )
}

export default Home
