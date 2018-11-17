import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'
import { media } from '../../shared/media'

const StyledSubNavigation = styled.nav`
  position: absolute;
  top: ${NUMBERs.MAGICK_NUMBER};
  left: calc(${NUMBERs.MAGICK_NUMBER} + 300px - 2px);
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.8;
  ${ media.tablet`
    transform: translateY(50%);
  `}
  ${ media.sp`
    display: none;
  `}
`
const SubNavigationList = styled.ul`
  border: solid 4px #fff;
  border-radius: 4px;
  padding: ${NUMBERs.MAGICK_NUMBER} calc(${NUMBERs.MAGICK_NUMBER} * 2);
`
const SubNavigationItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.5;
  cursor: pointer;
  ${ props => props.active ? 'color: yellow;' : '' }
  &:hover {
    color: yellow;
  }
  img {
    height: 15px;
    width: 15px;
    margin-right: calc(${NUMBERs.MAGICK_NUMBER} / 2);
  }
`
class SubNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.isActive    = this.isActive.bind(this)
  }

  handleClick(id) {
    if(this.props.navType === '/history') {
      this.props.selectHistory(id)
    }
    else if(this.props.navType === '/tactics') {
      this.props.selectTactics(id)
    }
  }

  isActive(id) {
    if(this.props.navType === '/history') {
      return this.props.selectedHistoryId === id ? true : false
    }
    else if(this.props.navType === '/tactics') {
      return this.props.selectedTacticsId === id ? true : false
    }
  }

  render() {
    if(!this.props.subItems.hasOwnProperty(this.props.navType)) { return null }

    const subNavigationItems = this.props.subItems[this.props.navType].map((item) => {
      return (
        <SubNavigationItem key={`subNavigationItem_${item.name}`} active={this.isActive(item.id)} onClick={() => this.handleClick(item.id)}>
          <img src={item.image}/>
          { item.name }
        </SubNavigationItem>
      )
    })
    return (
      <StyledSubNavigation>
        <SubNavigationList>
          { subNavigationItems }
        </SubNavigationList>
      </StyledSubNavigation>
    )
  }
}

export default SubNavigation
