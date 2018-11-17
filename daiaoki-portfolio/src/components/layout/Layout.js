import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import Navigation from './Navigation'
import MessageBox from './MessageBox'
import { media } from '../../shared/media'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -25%;
    left: 0;
    bottom: 0;
    right: 0;
    height: 125%;
    width: 100%;
    background-color: ${COLORs.BASE_COLOR};
    opacity: 0.7;
    z-index: -1;
    display: ${ props => props.gradient ? 'block' : 'none' };
  }
`
class Layout extends React.Component {
  render() {
    return (
      <Container gradient={this.props.currentPath !== '/'}>
        <Navigation currentPath={this.props.currentPath}/>
        <main>
          {this.props.children}
        </main>
        <MessageBox currentPath={this.props.currentPath}/>
      </Container>
    )
  }
}

export default Layout
