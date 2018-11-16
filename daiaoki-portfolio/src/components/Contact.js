import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import FieldContainer from './general/FieldContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import ANIMATIONs from '../shared/animations'
import github from '../assets/images/github-icon.png'
import twitter from '../assets/images/twitter-icon.png'
import facebook from '../assets/images/facebook-icon.png'

const ContactList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`
const ContactItem = styled.li`
  flex-basis: 24%;
  width: 24%;
  img {
    width: 100%;
    text-shadow: 5px 5px 8px black;
  }
  &:hover {
    animation: ${ANIMATIONs.MONSTER} 2.0s linear infinite;
  }
`
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactItems: [
        { name: 'GitHub',   image: github,   url: 'https://github.com/DaiAoki' },
        { name: 'Twitter',  image: twitter,  url: 'https://twitter.com/DaiAoki30' },
        { name: 'Facebook', image: facebook, url: 'https://www.facebook.com/dai.aoki.94' },
      ],
    }
  }

  render() {
    const contactItems = this.state.contactItems.map((item) => {
      return (
        <ContactItem key={`contactItem_${item.name}`}>
          <a href={item.url} target='blank'>
            <img src={item.image}/>
          </a>
        </ContactItem>
      )
    })
    return (
      <CenteredContainer>
        <FieldContainer>
          <ContactList>
            { contactItems }
          </ContactList>
        </FieldContainer>
      </CenteredContainer>
    )
  }
}

export default Contact
