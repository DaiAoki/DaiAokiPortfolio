import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../styled-components/Container'

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
}
class LinkButton extends React.Component {
  render() {
    return (
      <section className='u-mb-l'>
        <Container>
          <Link to={this.props.path} style={linkButton}>{this.props.text}</Link>
        </Container>
      </section>
    )
  }
}

export default LinkButton;
