import React from 'react'
import styled from 'styled-components'
import Logo from './shared/Logo'
import HeaderNav from './header/HeaderNav'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

const HeaderInner = styled.div`
  position: relative;
`

const HeaderMenu = styled.div`
  position: absolute;
  top: -22vw;
  right: -20vw;
  width: 44vw;
  padding-top: 44vw;
  border-radius: 0;
  border-bottom-left-radius: 50%;
  box-shadow: 0 0 1rem 0 rgba(75,94,127,.15);
`

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo/>
        <StyledHeader>
          <HeaderInner>
            <HeaderNav/>
            <HeaderMenu/>
          </HeaderInner>
        </StyledHeader>
      </header>
    )
  }
}

export default Header;
