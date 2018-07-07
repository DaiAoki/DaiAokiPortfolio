import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../styled-components/Container'
import styled from 'styled-components'
import { media } from '../../helpers/Helper'

const LinkContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 1rem;
  background: #f03846;
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  font-size: 1.8rem;
  font-family: Trirong,serif;
  box-shadow: 1px 1.5px 2px #aaa;
  ${ media.pc`
    width: 240px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 2.4rem;
  `}
`

const BigCircle = styled.div`
  position: absolute;
  bottom: -40vw;
  right: -10vw;
  padding: 30vw;
  border-radius: 50%;
  background-color: #dbdbdb;
  z-index: -1;
  ${ media.pc`
    bottom: -30vw;
    padding: 22vw;
  `}
`

class LinkButton extends React.Component {
  render() {
    return (
      <section className='u-mb-l' style={{position: 'relative'}}>
        <Container style={{textAlign: 'center'}}>
          <Link to={this.props.path}>
            <LinkContainer>
              {this.props.text}
            </LinkContainer>
          </Link>
        </Container>
        <BigCircle/>
      </section>
    )
  }
}

export default LinkButton;
