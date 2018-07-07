import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import styled from 'styled-components'

const Modal = styled.div`
  display: block;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  background-color: #fafafa;
  padding: 24px;
  max-height: 70%;
  width: 70%;
  max-width: 300px;
  margin: auto;
  overflow-y: auto;
  border-radius: 4px;
  z-index: 1001;
`

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: -25%;
  left: 0;
  bottom: 0;
  right: 0;
  height: 125%;
  width: 100%;
  background: #000;
  opacity: 0.5;
  display: block;
`

class MomentModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      byId:    this.props.byID,
      count:   this.props.count,
    }
    this.showModal  = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    this.showModal()
  }

  showModal() {
    this.visibleTimer = setTimeout(() => this.closeModal(), this.state.count)
    document.body.style.overflow = 'hidden'
  }

  closeModal() {
    clearTimeout( this.visibleTimer )
    document.body.style.overflow = 'auto'
    ReactDOM.unmountComponentAtNode(document.getElementById(this.state.byId))
  }

  render() {
    return (
      <React.Fragment>
        <Modal>
          { this.props.children }
        </Modal>
        <ModalOverlay/>
      </React.Fragment>
    );
  }
}

export default MomentModal;
