import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../styled-components/Container'
import styled from 'styled-components'

const linkButton = {
  display: 'inline-block',
  width: '100%',
  paddingTop: '1.25rem',
  paddingBottom: '1.25rem',
  borderRadius: '1rem',
  background: '#f03846',
  color: '#fff',
  textAlign: 'center',
  letterSpacing: '2px',
  fontSize: '17px',
  fontFamily: 'Trirong,serif',
  boxShadow: '1px 1.5px 2px #aaa',
}

const BigCircle = styled.div`
  position: absolute;
  bottom: -40vw;
  right: -10vw;
  padding: 30vw;
  border-radius: 50%;
  background-color: #dbdbdb;
  z-index: -1;
`

class LinkButton extends React.Component {
  render() {
    return (
      <section className='u-mb-l' style={{position: 'relative'}}>
        <Container>
          <Link to={this.props.path} style={linkButton}>{this.props.text}</Link>
        </Container>
        <BigCircle/>
      </section>
    )
  }
}

export default LinkButton;
