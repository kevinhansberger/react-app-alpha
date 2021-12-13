import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Test = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div class="body-spacing">
            <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
            <h2 class="page-title">Test</h2>
            <hr class="hr-top" />
            <hr class="hr-bottom" />
            <h3 class="btn-container"><p class="btn-img-p"><a href="#">Test</a></p></h3>
        </div>
    )
}

export default Test
