import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import FieldContainer from './general/FieldContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import ANIMATIONs from '../shared/animations'

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
    filter: drop-shadow(6px 6px 6px rgba(0,0,0,0.6));
  }
  &:hover {
    animation: ${ANIMATIONs.MONSTER} 2.0s linear infinite;
  }
`
class Contact extends React.Component {
  render() {
    const contactItems = this.props.subItems['/contact'].map((item) => {
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
