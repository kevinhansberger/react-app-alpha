import React from 'react'
import BottomNavBar from '../components/BottomNavBar'

const Volunteer = () => {
    return (
      <div class="body-spacing">
          <div class="top-bar"><h1 class="top-bar-text">Politician</h1></div>
          <h2 class="page-title">Volunteer</h2>
          <iframe src="https://msgsndr.com/widget/form/4cOTWF71kr12F3ScTa16" scrolling="no" id="4cOTWF71kr12F3ScTa16" class="ghl-form" sandbox='allow-scripts allow-same-origin'/>
            <BottomNavBar name='volunteer' />
        </div>
    )
}

export default Volunteer
