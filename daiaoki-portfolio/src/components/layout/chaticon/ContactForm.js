import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import styled from 'styled-components'
import { media } from '../../../helpers/Helper'
import axios from 'axios'
import Loading from '../../shared/Loading'

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
  max-width: 500px;
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

const FormDiv = styled.div`
  width: 100%;
  margin: 10px auto;
  position: relative;
  ${ media.pc`
    width: 400px;
  `}
`

const FormInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 6px;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
  box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
`

const FormTextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  height: 140px;
  min-height: 120px;
  font-size: 1.4rem;
  padding: 8px;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
  box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
`

const FormSubmit = styled.input`
  width: 100%;
  border-style: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #28a745;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#34d058), color-stop(90%, #28a745));
  background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
  border: 1px solid rgba(27,31,35,0.2);
  border-radius: 0.25em;
  padding: 8px 12px;
  cursor: pointer;
  ${ media.pc`
    width: 400px;
  `}
`

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postMsg: false,
      isLoading: false,
      name:    '',
      email:   '',
      message: '',
    }
    this.showModal    = this.showModal.bind(this)
    this.closeModal   = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.successPost  = this.successPost.bind(this)
  }

  componentDidMount() {
    this.showModal()
  }

  showModal() {
    document.body.style.overflow = 'hidden'
  }

  closeModal() {
    clearTimeout( this.visibleTimer )
    document.body.style.overflow = 'auto'
    ReactDOM.unmountComponentAtNode(document.getElementById('chatModal'))
  }

  successPost() {
    this.setState({postMsg: true})
    this.visibleTimer = setTimeout(() => this.closeModal(), 1500)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoading: true})
    axios.post('https://us-central1-daiaokiportfolio.cloudfunctions.net/contact', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    })
      .then(res => {
        this.setState({isLoading: false})
        this.successPost()
      }).catch(err => {
        // Slackへの通知が成功していても失敗のレスポンスになるため、暫定で失敗の方にも成功の処理と同等の処理を加える。
        this.setState({isLoading: false})
        this.successPost()
      })
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    var modal = this.state.postMsg ?
        <Modal>
          <p style={{fontSize: '2.0rem', marginBottom: '20px'}}>お問い合わせありがとうございます！</p>
          <p style={{fontSize: '1.6rem', color: '#6b6b6b'}}>＊返信まで最大で2〜3日お時間をいただきます。</p>
        </Modal>
        :
        <Modal>
          <form style={{textAlign: 'center'}} onSubmit={this.handleSubmit}>
            <p style={{fontSize: '2.0rem', marginBottom: '20px'}}>お問い合わせフォーム</p>
            <FormDiv className='must'>
              <FormInput type='text' placeholder='お名前' value={this.state.name} name='name' onChange={this.handleChange}/>
            </FormDiv>
            <FormDiv className='must'>
              <FormInput type='text' placeholder='メールアドレス' value={this.state.email} name='email' onChange={this.handleChange}/>
            </FormDiv>
            <FormDiv className='must must--textarea'>
              <FormTextArea type='text' placeholder='お問い合わせ内容' value={this.state.message} name='message' onChange={this.handleChange}/>
            </FormDiv>
            <FormSubmit type='submit' value='登録'/>
          </form>
        </Modal>
        ;

    const loading = this.state.isLoading ? <Loading/> : null

    return (
      <React.Fragment>
        { loading }
        { modal }
        <ModalOverlay onClick={() => this.closeModal()}/>
      </React.Fragment>
    );
  }
}

export default ContactForm;
