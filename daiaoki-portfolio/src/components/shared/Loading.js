import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: block;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1002;
`

class Loading extends React.Component {
  render() {
    return (
      <LoadingContainer>
        <div className='loader'>Loading...</div>
      </LoadingContainer>
    );
  }
}

export default Loading;
