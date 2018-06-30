import React from 'react'
import homePath from '../../../images/home.png'
import { Link } from 'react-router-dom'

const headerNavIconStyle = {
  display: 'inline-block',
  position: 'absolute',
  top: '6vw',
  right: '4vw',
}

class Home extends React.Component {
  render() {
    return (
      <Link to='/' style={headerNavIconStyle}>
        <img src={ homePath } alt='home' style={{width: '2rem'}}/>
      </Link>
    )
  }
}

export default Home;
