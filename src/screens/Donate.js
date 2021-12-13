import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Donate = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
      <div class="body-spacing">
          <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
          <h2 class="page-title">Donate</h2>
          <hr class="hr-top" />
          <hr class="hr-bottom" />
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Donate Online</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Mail A Check</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Attend Fundraiser</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Donation Guidelines</a></p></h3>
          <BottomNavBar name='donate' />
      </div>
    )
}

export default Donate
