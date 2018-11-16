import React from 'react'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import { media } from '../../shared/media'

const StyledCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

class CenteredContainer extends React.Component {
  render() {
    return (
      <StyledCenteredContainer>
        { this.props.children }
      </StyledCenteredContainer>
    )
  }
}

export default CenteredContainer
