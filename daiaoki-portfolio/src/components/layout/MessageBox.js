import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'

const StyledMessageBox = styled.div`
  position: absolute;
  top: calc(50% + 240px + (${NUMBERs.MAGICK_NUMBER} * 4));
  left: 50%;
  transform: translateX(-50%);
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.8;
  display: ${ props => props.isDisplay ? 'block' : 'none' };
`
const StyledMessageBoxInner = styled.div`
  border: solid 4px #fff;
  border-radius: 4px;
  width: 50vw;
  height: 130px;
  min-width: 600px;
  padding: ${NUMBERs.MAGICK_NUMBER};
  font-size: 2.0rem;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: pre-wrap;"
`

var timerId
function TypeWriter(_object, message) {
  var messageLength = message.length
  timerId = setInterval(function() {
    _object.innerHTML = message.substr(0, message.length - messageLength)
    messageLength--
    if(messageLength < 0) {
      clearInterval(timerId)
    }
  }, 60)
}
class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        '/history': 'これまでの開発実績です。RailsとReactが得意です。\nバックエンド・フロントエンド・インフラ全てできます。'
      },
    }
  }

  componentDidMount() {
    const msgBox = document.getElementById('msgBox')
    const message = this.state.messages[this.props.currentPath] || ''
    TypeWriter(msgBox, message)
  }

  componentWillReceiveProps(nextProps) {
    clearInterval(timerId)
    const msgBox = document.getElementById('msgBox')
    const message = this.state.messages[nextProps.currentPath] || ''
    TypeWriter(msgBox, message)
  }

  render() {
    return (
      <StyledMessageBox isDisplay={!(this.props.currentPath === '/')}>
        <StyledMessageBoxInner id='msgBox' />
      </StyledMessageBox>
    )
  }
}

export default MessageBox
