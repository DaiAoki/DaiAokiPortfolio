import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'
import './css/App.css'

import Footer from './components/layout/Footer'
import ChatIcon from './components/layout/ChatIcon'
import Top from './components/Top'
import Services from './components/Services'

class App extends React.Component {

  componentWillMount() {
    window.sr = ScrollReveal();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main style={{marginTop: '10vw', overflow: 'hidden', minHeight: '75vh'}}>
            <Route exact path='/'  component={Top}/>
            <Route exact path='/services' component={Services}/>
          </main>
          <Footer/>
          <ChatIcon/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
