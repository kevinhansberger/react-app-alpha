import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import Volunteer from './screens/Volunteer'
import Vote from './screens/Vote'
import Donate from './screens/Donate'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/volunteer' component={Volunteer} />
      <Route exact path='/vote' component={Vote} />
      <Route exact path='/donate' component={Donate} />
    </Router>
  )
}

export default App
