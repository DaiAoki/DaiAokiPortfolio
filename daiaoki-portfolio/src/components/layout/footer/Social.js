import React from 'react'
import styled from 'styled-components'
import SocialItem from './SocialItem'
import twitterPath from '../../../images/twitter-icon.png'
import facebookPath from '../../../images/facebook-icon.png'
import githubPath from '../../../images/github-icon.png'

class Social extends React.Component {
  render() {
    return (
      <section className='u-mb-l' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <SocialItem src={twitterPath}  href='https://twitter.com/DaiAoki30'/>
        <SocialItem src={facebookPath} href='https://www.facebook.com/dai.aoki.94'/>
        <SocialItem src={githubPath}   href='https://github.com/DaiAoki'/>
      </section>
    )
  }
}

export default Social;
