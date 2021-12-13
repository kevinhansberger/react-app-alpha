import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Vote = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
      <div class="body-spacing">
          <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
          <h2 class="page-title">Vote</h2>
          <hr class="hr-top" />
          <hr class="hr-bottom" />
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Find Your Polling Location</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Early Voting Polling Locations</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Request Absentee Ballot</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Register to Vote</a></p></h3>
          <BottomNavBar name='vote' />
        </div>
    )
}

export default Vote
