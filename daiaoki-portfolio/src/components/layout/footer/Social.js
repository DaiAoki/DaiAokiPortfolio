import React from 'react'
import styled from 'styled-components'

const SocialItem = styled.p`
  &:not(:last-child) {
    margin-bottom: 4vw;
  }
`

class Social extends React.Component {
  render() {
    return (
      <section className='u-mb-l'>
        <SocialItem>Twitter</SocialItem>
        <SocialItem>Facebook</SocialItem>
        <SocialItem>GitHub</SocialItem>
      </section>
    )
  }
}

export default Social;
