import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import Store from './store/Store'
import ScrollReveal from 'scrollreveal'
import './assets/css/App.css'

import Layout from './components/layout/Layout'
import Top    from './components/Top'

const history = createBrowserHistory()
const store   = Store(history)

class Root extends React.Component {

  componentWillMount() {
    window.sr = ScrollReveal()
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Top}/>
              <Route component={Top}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
