import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'
import sword from '../../assets/images/sword.svg'

const StyledNavigation = styled.nav`
  position: absolute;
  top: ${NUMBERs.MAGICK_NUMBER};
  left: ${NUMBERs.MAGICK_NUMBER};
  width: 300px;
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.9;
`
const NavigationInner = styled.div`
  border: solid 4px #fff;
  border-radius: 4px;
`
const NavigationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${NUMBERs.MAGICK_NUMBER} 0;
  text-align: center;
`
const NavigationItem = styled(NavLink)`
  flex-basis: 50%;
  width: 50%;
  margin-bottom: ${NUMBERs.MAGICK_NUMBER};
  position: relative;
  &:nth-child(7), &:nth-child(8) {
    margin-bottom: 0;
  }
  &:hover {
    color: yellow;
  }
  &.active {
    color: yellow;
    img {
      display: block;
    }
  }
`
const CurrentMark = styled.img`
  display: none;
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%) rotate(45deg);
  width: 26px;
  height: 26px;
`
class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { name: 'はなす', path: '/contact'   }, { name: 'じゅもん', path: '/omajinai' },
        { name: 'どうぐ', path: '/item'      }, { name: 'せんれき', path: '/history'  },
        { name: 'そうび', path: '/equipment' }, { name: 'しらべる', path: '/search'   },
        { name: 'つよさ', path: '/status'    }, { name: 'さくせん', path: '/tactics'  },
      ]
    }
  }

  render() {
    const navigationItems = this.state.navItems.map((item) => {
      return (
        <NavigationItem to={item.path}>
          <CurrentMark src={sword}/>
          { item.name }
        </NavigationItem>
      )
    })
    return (
      <StyledNavigation>
        <NavigationInner>
          <NavigationList>
            { navigationItems }
          </NavigationList>
        </NavigationInner>
      </StyledNavigation>
    )
  }
}

export default Navigation
