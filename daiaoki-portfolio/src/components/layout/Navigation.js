import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'

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
const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${NUMBERs.MAGICK_NUMBER} calc(${NUMBERs.MAGICK_NUMBER} * 4);
`
const NavigationItem = styled.li`
  flex-basis: 50%;
  width: 50%;
  margin-bottom: ${NUMBERs.MAGICK_NUMBER};
  &:nth-child(2n) {
    text-align: right;
  }
  &:nth-child(7), &:nth-child(8) {
    margin-bottom: 0;
  }
`
class Navigation extends React.Component {
  render() {
    return (
      <StyledNavigation>
        <NavigationInner>
          <NavigationList>
            <NavigationItem>はなす</NavigationItem>
            <NavigationItem>じゅもん</NavigationItem>
            <NavigationItem>どうぐ</NavigationItem>
            <NavigationItem>せんれき</NavigationItem>
            <NavigationItem>そうび</NavigationItem>
            <NavigationItem>しらべる</NavigationItem>
            <NavigationItem>つよさ</NavigationItem>
            <NavigationItem>さくせん</NavigationItem>
          </NavigationList>
        </NavigationInner>
      </StyledNavigation>
    )
  }
}

export default Navigation
