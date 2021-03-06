import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import SubNavigation from '../../containers/SubNavigation'
import TotalPlayingTime from './TotalPlayingTime'
import COLORs from '../../shared/colors'
import ANIMATIONs from '../../shared/animations'
import NUMBERs from '../../shared/number'
import { media } from '../../shared/media'
import sword from '../../assets/images/sword.svg'
import menu from '../../assets/images/menu-icon.svg'

const StyledNavigation = styled.nav`
  position: absolute;
  top: ${NUMBERs.MAGICK_NUMBER};
  left: ${NUMBERs.MAGICK_NUMBER};
  width: 300px;
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.8;
  display: ${ props => props.isDisplay ? 'block' : 'none' };
  ${ media.sp`
    top: calc(${NUMBERs.MAGICK_NUMBER} * 6);
    width: calc(100vw - (${NUMBERs.MAGICK_NUMBER} * 2));
  `}
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
  line-height: 1.5;
  margin-bottom: ${NUMBERs.MAGICK_NUMBER};
  position: relative;
  &:nth-child(7), &:nth-child(8) {
    margin-bottom: 0;
  }
  &:hover {
    color: yellow;
  }
  ${ props => props.active ? 'color: yellow; img{display: block;}' : '' }
  ${ media.sp`
    font-size: 1.5rem;
  `}
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
const NavigationButton = styled.label`
  display: block;
  position: absolute;
  top: calc(${NUMBERs.MAGICK_NUMBER} + 4px);
  right: ${NUMBERs.MAGICK_NUMBER};
  animation: ${props => props.animation ? `${ANIMATIONs.MENU_ICON} 5.0s linear infinite;` : ''}
  ${ media.pc`
    display: none;
  `}
  ${ media.tablet`
    display: none;
  `}
`
const HiddenInput = styled.input`
  display: none;
  &:checked ~ .navigationClass {
    opacity: 1;
    display: block;
  }
`
const NavigationHiddenWrapper = styled.div`
  ${ media.sp`
    opacity: 0;
    transition: 0.8s;
    display: none;
    position: relative;
    z-index: 2;
  `}
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
      ],
      hasClickedNavigationButton: false,
    }
  }

  closeNavigation() {
    document.getElementById("navigation").checked = false
  }

  handleClickNavigationButton() {
    this.setState({hasClickedNavigationButton: true})
  }

  render() {
    const navigationItems = this.state.navItems.map((item) => {
      return (
        <NavigationItem key={`navigationItem_${item.path}`}
                        to={item.path}
                        active={this.props.currentPath === item.path}
                        onClick={() => this.closeNavigation()}>
          <CurrentMark src={sword}/>
          { item.name }
        </NavigationItem>
      )
    })
    return (
      <React.Fragment>
        <NavigationButton htmlFor="navigation" animation={!this.state.hasClickedNavigationButton} onClick={() => this.handleClickNavigationButton()}>
          <ReactSVG src={menu}/>
        </NavigationButton>
        <HiddenInput type="checkbox" id="navigation"/>
        <NavigationHiddenWrapper className="navigationClass">
          <StyledNavigation isDisplay={!(this.props.currentPath === '/')}>
            <NavigationInner>
              <NavigationList>
                { navigationItems }
              </NavigationList>
            </NavigationInner>
          </StyledNavigation>
          <SubNavigation/>
        </NavigationHiddenWrapper>
        <TotalPlayingTime currentPath={this.props.currentPath}/>
      </React.Fragment>
    )
  }
}

export default Navigation
