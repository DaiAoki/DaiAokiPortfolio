import React from 'react'
import { Route } from 'react-router-dom'

import NotePc from './NotePc'
import Home from './Home'

class HeaderNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/'  component={NotePc}/>
        <Route exact path='/services' component={Home}/>
      </React.Fragment>
    )
  }
}

export default HeaderNav;
