import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'
import styled from 'styled-components'
import './css/App.css'

import Footer from './components/layout/Footer'
import ChatIcon from './components/layout/ChatIcon'
import Top from './components/Top'
import Services from './components/Services'
import { media } from './helpers/Helper'

const Main = styled.main`
  padding-top: 10vw;
  overflow: hidden;
  min-height: 75vh;
  ${ media.pc`
    padding-top: 4vw;
    background-color: #fffafa;
  `}
`

class App extends React.Component {

  componentWillMount() {
    window.sr = ScrollReveal();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Main>
            <Route exact path='/'           component={Top}/>
            <Route exact path='/index.html' component={Top}/>
            <Route exact path='/services'   component={Services}/>
          </Main>
          <Footer/>
          <ChatIcon/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
