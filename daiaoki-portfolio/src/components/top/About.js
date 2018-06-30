import React from 'react'
import profilePath from '../../images/profile.jpg'
import styled from 'styled-components'
import Container from '../../styled-components/Container'
import Row from '../../styled-components/Row'
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

class About extends React.Component {
  render() {
    return (
      <section className='u-mb-l'>
        <Anchor className='u-mb-s'>
          <span>01.</span>
          <p>About me</p>
        </Anchor>
        <Container>
          <Row>
            <Paper>
              <div style={{width: '100%', height: '50vw'}}>
                <img src={ profilePath } style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px', width: '100%', height: '100%', objectFit: 'cover'}}/>
              </div>
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
      </section>
    )
  }
}

export default About;
