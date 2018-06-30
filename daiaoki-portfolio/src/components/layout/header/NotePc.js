import React from 'react'
import notePcPath from '../../../images/notepc.png'
import { Link } from 'react-router-dom'

const headerNavIconStyle = {
  display: 'inline-block',
  position: 'absolute',
  top: '6vw',
  right: '4vw',
}

class NotePc extends React.Component {
  render() {
    return (
      <Link to='/services' style={headerNavIconStyle}>
        <img src={ notePcPath } alt='notePc' style={{width: '2rem'}}/>
      </Link>
    )
  }
}

export default NotePc;
