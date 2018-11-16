import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'
import portfolio from '../../assets/images/portfolio.png'
import anny from '../../assets/images/anny.png'
import startupGit from '../../assets/images/startup-git.png'
import whichone from '../../assets/images/whichone.png'
import xmarket from '../../assets/images/no_image.png'

const StyledSubNavigation = styled.nav`
  position: absolute;
  top: ${NUMBERs.MAGICK_NUMBER};
  left: calc(${NUMBERs.MAGICK_NUMBER} + 300px - 2px);
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.8;
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
    this.state = {
      subNavigationItems: {
        '/history': [
          { name: 'ポートフォリオ',      url: 'https://daiaoki.me',         image: portfolio },
          { name: 'Anny',                url: 'https://anny.gift/',         image: anny },
          { name: 'スタートアップのGit', url: 'http://www.startup-git.com', image: startupGit },
          { name: 'whichone',            url: 'localhost:3000',             image: whichone },
          { name: 'X-market',            url: 'https://x-market.trade',     image: xmarket },
        ],
      },
    }
  }

  render() {
    const subNavigationItems = this.state.subNavigationItems[this.props.navType].map((item) => {
      return (
        <SubNavigationItem key={`subNavigationItem_${item.name}`}>
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
