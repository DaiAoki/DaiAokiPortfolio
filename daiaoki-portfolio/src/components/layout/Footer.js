import React from 'react'
import styled from 'styled-components'
import Social from './footer/Social'
import Container from '../../styled-components/Container'

const StyledFooter = styled.footer`
  background: #20252e;
  color: #fff;
  text-align: center;
  padding: 5rem 0 3rem;
`

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Container>
          <Social/>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer;
