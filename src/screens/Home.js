import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <div class="nav-img-text-container">
            <img src="../images/politician-app-btn-bg-01.jpg" class="nav-img-center" />
            <div class="nav-img-text-centered">Test</div>
            </div>
            <BottomNavBar name='home' />
        </div>
    )
}

export default Home
