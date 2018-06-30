import React from 'react'
import styled from 'styled-components'
import chatIconPath from '../../images/chat.png'

const StyledChatIcon = styled.div`
  position: fixed;
  bottom: 17vw;
  right: 7vw;
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  background: #20252e;
  padding: 8px;
`

class ChatIcon extends React.Component {
  render() {
    return (
      <StyledChatIcon className='shadow'>
        <img src={ chatIconPath } style={{width: '100%', height: '100%'}}/>
      </StyledChatIcon>
    )
  }
}

export default ChatIcon;
