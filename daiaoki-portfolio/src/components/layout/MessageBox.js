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
class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        '/history': 'これまでの開発実績です。RailsとReactが得意です。\nバックエンド・フロントエンド・インフラ全てできます。'
      },
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.tutorial === false || nextProps.forceTutorial === true) {
      this.setState({open: true})
    }
  }

  render() {
    const message = this.state.messages[this.props.currentPath]
    return (
      <StyledMessageBox>
        <StyledMessageBoxInner id='msgBox'>
          { message }
        </StyledMessageBoxInner>
      </StyledMessageBox>
    )
  }
}

export default MessageBox
