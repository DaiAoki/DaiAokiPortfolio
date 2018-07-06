import React from 'react'
import { Link } from 'react-router-dom'

import Heading from './shared/Heading'
import About from './top/About'
import Skillset from './top/Skillset'
import History from './top/History'
import LinkButton from './shared/LinkButton'
import ScrollToTopOnMount from './shared/ScrollToTopOnMount'

class Top extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <Heading nameEng={'Hello World!'} nameJa={'はろーわーるど!'}/>
        <About/>
        <Skillset/>
        <History/>
        <LinkButton path={'/services'} text={'Service List'}/>
      </React.Fragment>
    )
  }
}

export default Top;
