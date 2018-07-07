import React from 'react'
import styled from 'styled-components'
import { media } from '../../../helpers/Helper'

const StyledSocialItem = styled.a`
  width: 15vw;
  ${ media.pc`
    width: 70px;
  `}
  img {
    width: 100%;
  }
`

class SocialItem extends React.Component {
  render() {
    return (
      <StyledSocialItem href={this.props.href} target='_blank'>
        <img src={this.props.src}/>
      </StyledSocialItem>
    )
  }
}

export default SocialItem
