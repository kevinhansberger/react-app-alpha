import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const About = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
      <div class="body-spacing">
          <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
          <h2 class="page-title">About</h2>
          <hr class="hr-top" />
          <hr class="hr-bottom" />
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Bio</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Platform</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Endorsements</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Legislation</a></p></h3>
          <h3 class="btn-container"><p class="btn-img-p"><a href="#">Community</a></p></h3>
          <BottomNavBar name='about' />
        </div>
    )
}

export default About
