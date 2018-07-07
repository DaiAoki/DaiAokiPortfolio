import React from 'react'
import profilePath from '../../images/profile.jpg'
import styled from 'styled-components'
import { media } from '../../helpers/Helper'
import Container from '../../styled-components/Container'
import Paper from '../../styled-components/Paper'
import Anchor from '../../styled-components/Anchor'

const Title = styled.p`
  font-size: 26px;
  font-weight: 100;
  letter-spacing: 2px;
  font-family: Trirong,serif;
  color: #20252e;
`

const SubTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 7px;
  line-height: 32px;
  font-family: Trirong,serif;
  color: #777;
`

const Heading = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #777;
  letter-spacing: 2px;
`

const SubHeading = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #adb1bc;
  letter-spacing: 5px;
  line-height: 20px;
`

const RightCircle = styled.div`
  position: absolute;
  top: -5vw;
  right: -16vw;
  padding: 24vw;
  border-radius: 50%;
  background-color: #a4dfcf;
  z-index: 0;
  ${ media.pc`
    right: -10vw;
    padding: 14vw;
  `}
`

const LeftCircle = styled.div`
  position: absolute;
  bottom: -5vw;
  left: -16vw;
  padding: 30vw;
  border-radius: 50%;
  background-color: #fffacd;
  z-index: 0;
  ${ media.pc`
    left: 10vw;
    padding: 18vw;
  `}
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    ${ media.pc`
      width: 50%;
    `}
  }
`

const ProfileImage = styled.div`
  width: 100%;
  height: 50vw;
  ${ media.pc`
    height: 25vw;
  `}
`

class About extends React.Component {

  componentDidMount() {
    const config = {
      origin:      'left',
      distance:    '200vw',
      duration:    1500,
      delay:       200,
      opacity:     0,
      scale:       2,
      easing:      'ease',
      mobile:      true,
      reset:       false,
      userDelay:   'always',
      viewFactore: 0.2,
      viewOffset:  { top: 0, right: 0, bottom: 0, left: 0 },
    }

    window.sr.reveal('.about', config)
  }

  render() {
    return (
      <section className='u-mb-l' style={{position: 'relative'}}>
        <Anchor className='u-mb-s'>
          <span>01.</span>
          <p>About me</p>
        </Anchor>
        <Container>
          <Row>
            <Paper className='about'>
              <ProfileImage>
                <img src={ profilePath } style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px', width: '100%', height: '100%', objectFit: 'cover'}}/>
              </ProfileImage>
              <div style={{padding: '4vw', lineHeight: '26px'}}>
                <h1 style={{marginBottom: '2px'}}>
                  <Title>DaiAoki</Title>
                  <SubTitle>あおき だい (26)</SubTitle>
                </h1>
                <h2 style={{marginBottom: '10px'}}>
                  <Heading>Freelance Engineer</Heading>
                  <SubHeading>フリーランスエンジニア</SubHeading>
                </h2>
                <p style={{fontSize: '13px'}}>
                  <span>1991年生まれ東京都在住、フルスタックのWebエンジニア。0→1のサービス開発が趣味。</span>
                  <br/>
                  <span>サッカーと自転車と麻雀が好き。</span>
                </p>
              </div>
            </Paper>
          </Row>
        </Container>
        <RightCircle/>
        <LeftCircle/>
      </section>
    )
  }
}

export default About;
