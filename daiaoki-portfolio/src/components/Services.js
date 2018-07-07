import React from 'react'
import { Link } from 'react-router-dom'

import Heading from './shared/Heading'
import LinkButton from './shared/LinkButton'
import ServiceItem from './services/ServiceItem'
import ScrollToTopOnMount from './shared/ScrollToTopOnMount'
import Container from '../styled-components/Container'
import noImagePath from '../images/no_image.png'
import portfolioPath from '../images/portfolio.png'
import annyPath from '../images/anny.png'
import startupGitPath from '../images/startup-git.png'
import whichonePath from '../images/whichone.png'

const config = [
  {
    origin:     'right',
    distance:   '100vw',
    duration:   1500,
    delay:      200,
    opacity:    0,
    scale:      0.5,
    easing:     'ease',
    mobile:     true,
    reset:      false,
    useDelay:   'always',
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  {
    origin:     'left',
    distance:   '100vw',
    duration:   1500,
    delay:      200,
    opacity:    0,
    scale:      0.5,
    easing:     'ease',
    mobile:     true,
    reset:      false,
    useDelay:   'always',
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  },
]

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceItems: [
        {
          isReleased: true,
          name:       'ポートフォリオ',
          link:       'https://daiaoki.me',
          image:      portfolioPath,
          tags:       ['個人開発', 'ポートフォリオ', 'Firebase', 'React', 'SPA']
        },
        {
          isReleased: true,
          name:       'Anny',
          link:       'https://anny.gift',
          image:      annyPath,
          tags:       ['チーム開発', 'EC', 'メディア', 'AWS', 'Rails4.2.5', 'Rails5.1.6', 'React', 'jQuery', 'Webpack', 'MySQL', 'Docker', 'ElasticSearch', 'Redis']
        },
        {
          isReleased: true,
          name:       'スタートアップのGit',
          link:       'http://www.startup-git.com',
          image:      startupGitPath,
          tags:       ['個人開発', 'チュートリアル', '記事CMS', 'AWS', 'Rails5.0.6', 'React', 'Webpack', 'MySQL']
        },
        {
          isReleased: false,
          name:       'whichone',
          link:       'localhost:3000',
          image:      whichonePath,
          tags:       ['個人開発', '趣味', 'Rails5.2.0', 'React', 'Webpack', 'MySQL']
        },
        {
          isReleased: true,
          name:       'X-market',
          link:       'https://x-market.trade',
          image:      noImagePath,
          tags:       ['個人開発', 'シェアリングエコノミー', 'AWS', 'Rails5.2.0', 'React', 'Webpack', 'MySQL', 'Stripe']
        },
      ],
    }
  }

  render() {
    const items = this.state.serviceItems.map((item, i) => {
      return (
        <ServiceItem key={i} isReleased={item.isReleased} name={item.name} link={item.link} image={item.image} tags={item.tags} config={(i % 2) ? config[0] : config[1]}/>
      )
    });

    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <Heading nameEng={'Services'} nameJa={'サービス'}/>
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'stretch', alignContent: 'space-around'}}>
          { items }
        </Container>
        <LinkButton path={'/'} text={'Top Page'}/>
      </React.Fragment>
    )
  }
}

export default Services;
