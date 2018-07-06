import React from 'react'
import styled from 'styled-components'
import Container from '../../styled-components/Container'

const NameEng = styled.span`
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 2px;
`

const NameJa = styled.span`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 7px;
  line-height: 32px;
`

class Heading extends React.Component {

  componentDidMount() {
    const config = {
      origin:      'left',
      distance:    '0',
      duration:    2000,
      delay:       100,
      opacity:     0,
      scale:       1,
      easing:      'ease',
      mobile:      true,
      reset:       false,
      userDelay:   'always',
      viewFactore: 0.2,
      viewOffset:  { top: 0, right: 0, bottom: 0, left: 0 },
    }

    window.sr.reveal('.heading', config)
  }

  render() {
    return (
      <section className='heading u-mb-l'>
        <Container>
          <h1>
            <NameEng>{this.props.nameEng}</NameEng>
            <br/>
            <NameJa>{this.props.nameJa}</NameJa>
          </h1>
        </Container>
      </section>
    )
  }
}

export default Heading;
