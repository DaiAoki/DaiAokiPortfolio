import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import COLORs from '../shared/colors'
import ANIMATIONs from '../shared/animations'
import { media } from '../shared/media'
import ScrollToTopOnMount from './general/ScrollToTopOnMount'

const TopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORs.BASE_COLOR};
  position: relative;
`
const StartEngineerLife = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 2.0rem;
  letter-spacing: 6px;
  cursor: pointer;
  animation: ${ANIMATIONs.FLASHING} 3.0s linear infinite;
  &:hover {
    color: yellow;
  }
`
class Top extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <TopContainer>
          <StartEngineerLife to="/status">冒険する</StartEngineerLife>
        </TopContainer>
      </React.Fragment>
    )
  }
}

export default Top
