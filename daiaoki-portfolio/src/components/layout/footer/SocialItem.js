import React from 'react'
import styled from 'styled-components'

const StyledSocialItem = styled.a`
  width: 16vw;
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
