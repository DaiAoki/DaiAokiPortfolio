import React from 'react'
import styled from 'styled-components'
import { media } from '../../helpers/Helper'
import Container from '../../styled-components/Container'
import Anchor from '../../styled-components/Anchor'

const StyledHistory = styled.ul`
  list-style: none;
  ${ media.pc`
    width: 30vw;
    margin: 0 auto;
  `}
`

const HistoryList = styled.li`
  font-size: 1.3rem;
  margin-bottom: 20px;
  ${ media.pc`
    font-size: 1.5rem;
  `}
`

const HistoryAge = styled.span`
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
  width: 22vw;
  ${ media.pc`
    width: 10vw;
  `}
`

const HistoryEvent = styled.span`
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
  width: 62vw;
  ${ media.pc`
    width: 20vw;
  `}
`

const LeftCircle = styled.div`
  position: absolute;
  bottom: 10vw;
  left: -10vw;
  padding: 30vw;
  border-radius: 50%;
  background-color: #fdf5e6;
  z-index: -1;
`

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historyItems: [{age: 'Mar. 2010',  event: '北海高校を卒業'},
                     {age: 'Apr. 2010',  event: '北海道大学入学'},
                     {age: 'Aug. 2013',  event: '自転車で日本縦断'},
                     {age: 'Mar. 2014',  event: '北海道大学卒業'},
                     {age: 'Aug. 2015',  event: 'プログラミングに出会う'},
                     {age: 'Oct. 2015',  event: '地元札幌でSESの会社でキャリアをスタート'},
                     {age: 'Jul. 2017~', event: 'TrendersにてAnnyを開発'},
                     {age: 'Mar. 2018~', event: '株式会社Bullzでの自社サービス開発をスタート'},
                     {age: 'Jul. 2018~', event: 'フリーランスエンジニアとして独立'},
                    ],
    }
  };

  componentDidMount() {
    const config = {
      origin:      'left',
      distance:    '0',
      duration:    1500,
      delay:       300,
      opacity:     0,
      scale:       0.8,
      easing:      'ease',
      mobile:      true,
      reset:       false,
      userDelay:   'always',
      viewFactore: 0.2,
      viewOffset:  { top: 0, right: 0, bottom: 0, left: 0 },
    }

    window.sr.reveal('.history', config)
  }

  render() {
    const histories = this.state.historyItems.map((history, i) => {
      return (
        <HistoryList key={i}>
          <HistoryAge>{history.age}</HistoryAge>
          <HistoryEvent>{history.event}</HistoryEvent>
        </HistoryList>
      )
    });

    return (
      <section className='u-mb-l' style={{position: 'relative'}}>
        <Anchor className='u-mb-s'>
          <span>03.</span>
          <p>History</p>
        </Anchor>
        <Container>
          <StyledHistory className='history'>
            { histories }
          </StyledHistory>
        </Container>
        <LeftCircle/>
      </section>
    )
  }
}

export default History;
