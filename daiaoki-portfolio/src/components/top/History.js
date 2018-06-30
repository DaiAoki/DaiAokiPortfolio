import React from 'react'
import styled from 'styled-components'
import Container from '../../styled-components/Container'
import Anchor from '../../styled-components/Anchor'

const StyledHistory = styled.ul`
  list-style: none;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  float: right;
`

const HistoryList = styled.li`
  margin-left: 6.5vw;
  font-size: 13px;
`

const HistoryAge = styled.span`
  display: inline-block;
  height: 20vw;
  vertical-align: top;
`

const HistoryEvent = styled.span`
  display: inline-block;
  height: 100vw;
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
      <section className='u-mb-l'>
        <Anchor className='u-mb-s'>
          <span>03.</span>
          <p>History</p>
        </Anchor>
        <Container>
          <StyledHistory>
            { histories }
          </StyledHistory>
        </Container>
      </section>
    )
  }
}

export default History;
