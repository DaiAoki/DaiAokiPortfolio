import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import ScrollToTopOnMount from './general/ScrollToTopOnMount'
import field from '../assets/images/field.png'

const ServiceContainer = styled.div`
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
`
const ServiceContainerInner = styled.div`
  border: solid 4px #fff;
  border-radius: 4px;
  width: 50vw;
  height: 30vw;
  min-width: 600px;
  min-height: 360px;
  background-image: url(${field});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
class History extends React.Component {
  render() {
    return (
      <CenteredContainer>
        <ServiceContainer>
          <ServiceContainerInner>
          </ServiceContainerInner>
        </ServiceContainer>
      </CenteredContainer>
    )
  }
}

export default History
