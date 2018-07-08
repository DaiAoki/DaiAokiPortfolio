import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import chatIconPath from '../../images/chat.png'
import ContactForm from './chaticon/ContactForm'
import { media } from '../../helpers/Helper'

const StyledChatIcon = styled.div`
  position: fixed;
  bottom: 17vw;
  right: 7vw;
  width: 13vw;
  max-width: 70px;
  height: 13vw;
  max-height: 70px;
  border-radius: 50%;
  background: #20252e;
  padding: 8px;
  z-index: 101;
  ${ media.pc`
    bottom: 4vw;
    right: 4vw;
  `}
`

class ChatIcon extends React.Component {

  handleClick(e) {
    e.preventDefault()
    ReactDOM.render(
      <ContactForm/>,
      document.getElementById('chatModal')
    )
  }

  render() {
    return (
      <React.Fragment>
        <div id='chatModal'/>
        <StyledChatIcon className='shadow' onClick={(e) => this.handleClick(e)}>
          <img src={ chatIconPath } style={{width: '100%', height: '100%'}}/>
        </StyledChatIcon>
      </React.Fragment>
    )
  }
}

export default ChatIcon;
