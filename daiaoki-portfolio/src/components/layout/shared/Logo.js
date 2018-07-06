import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const logo = {
  position: 'absolute',
  left: '8vw',
  top: '4vw',
}

const LogoIcon = styled.span`
  display: inline-block;
  height: 12vw;
  width: 12vw;
  background: #20252e;
  border-radius: 50%;
  text-align: center;
  color: #ebebeb;
  line-height: 12vw;
`

const LogoLabel = styled.span`
  letter-spacing: 1.75px;
  font-weight: 100;
  color: #20252e;
  font-size: 14px;
  margin-left: 7vw;
`

class Logo extends React.Component {
  render() {
    return (
      <Link to='/' style={logo}>
        <LogoIcon>D</LogoIcon>
        <LogoLabel>丸いエンジニア@ダイエット中</LogoLabel>
      </Link>
    )
  }
}

export default Logo;
