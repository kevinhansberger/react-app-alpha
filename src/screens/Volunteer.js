import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Volunteer = () => {
    return (
        <div>
            <h1>volunteer</h1>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">Yard Sign</a></div>
            </div>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">Make Phone Calls</a></div>
            </div>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">Knock Doors</a></div>
            </div>
            <div class="nav-img-text-container">
            <a href="/donate"><img src="https://raw.githubusercontent.com/kevinhansberger/react-app-alpha/alpha/src/images/politician-app-btn-bg-01.jpg" class="nav-img-center" /></a>
            <div class="nav-img-text-centered"><a class="nav-img-text-style" href="/donate">Write Letters</a></div>
            </div>
            <BottomNavBar name='volunteer' />
        </div>
    )
}

export default Volunteer
