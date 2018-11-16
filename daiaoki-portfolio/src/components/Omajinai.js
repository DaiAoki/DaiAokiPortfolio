import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import ANIMATIONs from '../shared/animations'

const NoMore = styled.p`
  font-size: 8.4rem;
  text-shadow: 5px 5px 8px black;
  animation: ${ANIMATIONs.NOMORE_ONE} 3.0s linear;
  &:nth-child(2) {
    transform: translateY(-100%);
    animation: ${ANIMATIONs.NOMORE_TWO} 3.0s linear;
  }
`
class Omajinai extends React.Component {
  render() {
    return (
      <CenteredContainer>
        <div>
          <NoMore>No More おまじない!!!</NoMore>
          <NoMore>No More おまじない!!!</NoMore>
        </div>
      </CenteredContainer>
    )
  }
}

export default Omajinai
