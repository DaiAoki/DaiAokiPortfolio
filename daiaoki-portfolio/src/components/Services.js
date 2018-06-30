import React from 'react'
import { Link } from 'react-router-dom'

import Heading from './shared/Heading'
import LinkButton from './shared/LinkButton'

class Services extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading nameEng={'Services'} nameJa={'サービス'}/>
        <section>
          <p>daiaoki.tech</p>
        </section>
        <section>
          <p>Anny</p>
        </section>
        <section>
          <p>startup-git.com</p>
        </section>
        <section>
          <p>whichone</p>
        </section>
        <LinkButton path={'/'} text={'Top Page'}/>
      </React.Fragment>
    )
  }
}

export default Services;
