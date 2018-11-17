import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import Store from './store/Store'
import ScrollReveal from 'scrollreveal'
import './assets/css/App.css'

import Layout    from './containers/Layout'
import Top       from './components/Top'
import Contact   from './components/Contact'
import Omajinai  from './components/Omajinai'
import Item      from './containers/Item'
import History   from './containers/History'
import Equipment from './components/Equipment'
import Search    from './components/Search'
import Status    from './components/Status'
import Tactics   from './components/Tactics'

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
              <Route exact path="/"          component={Top}/>
              <Route exact path="/contact"   component={Contact}/>
              <Route exact path="/omajinai"  component={Omajinai}/>
              <Route exact path="/item"      component={Item}/>
              <Route exact path="/history"   component={History}/>
              <Route exact path="/equipment" component={Equipment}/>
              <Route exact path="/search"    component={Search}/>
              <Route exact path="/status"    component={Status}/>
              <Route exact path="/tactics"   component={Tactics}/>
              <Route component={Top}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
