import React from 'react'

import ScrollToTopOnMount from './general/ScrollToTopOnMount'

class Top extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <div>hello world!</div>
      </React.Fragment>
    )
  }
}

export default Top
