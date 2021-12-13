import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import TopBar from '../components/TopBar'

const Home = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div class="body-spacing">
            <TopBar />
            <h2 class="page-title">Welcome</h2>
            <hr class="hr-top" />
            <hr class="hr-bottom" />
            <h3 class="btn-container"><p class="btn-img-p"><a href="/donate">Donation Guidelines</a></p></h3>
            <h3 class="btn-container"><p class="btn-img-p"><a href="#">Platform</a></p></h3>
            <h3 class="btn-container"><p class="btn-img-p"><a href="#">District Map</a></p></h3>
            <h3 class="btn-container"><p class="btn-img-p"><a href="#">Handbook</a></p></h3>
            <h3 class="btn-container"><p class="btn-img-p"><a href="/test">Test</a></p></h3>
            <BottomNavBar name='home' />
        </div>
    )
}

export default Home
