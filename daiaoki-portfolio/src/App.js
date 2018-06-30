import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './css/App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ChatIcon from './components/layout/ChatIcon'
import Top from './components/Top'
import Services from './components/Services'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <main style={{marginTop: '30vw'}}>
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
