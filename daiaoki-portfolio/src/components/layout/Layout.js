import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import Navigation from './Navigation'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORs.NATURAL_WHITE};
  position: relative;
`
class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Navigation/>
        <main>
          {this.props.children}
        </main>
      </Container>
    )
  }
}

export default Layout
