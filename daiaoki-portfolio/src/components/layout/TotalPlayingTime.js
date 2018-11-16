import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'

const StyledTotalPlayingTime = styled.div`
  position: absolute;
  top: ${NUMBERs.MAGICK_NUMBER};
  right: ${NUMBERs.MAGICK_NUMBER};
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.9;
  display: ${ props => props.isDisplay ? 'block' : 'none' };
`
const TotalPlayingTimeInner = styled.div`
  border: solid 4px #fff;
  border-radius: 4px;
  padding: ${NUMBERs.MAGICK_NUMBER};
`
class TotalPlayingTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalTime: '',
    }
  }

  componentWillMount() {
    const componentThis = this
    var zeroFill = function(num) {
      return num < 10 ? `0${num}` : num
    }
    setInterval(function() {
      var diff = (new Date().getTime()) - (new Date("2015/9/1").getTime())
      var nowYear  = Math.floor(diff / NUMBERs.YEAR_NUM)
      var nowMonth = Math.floor((diff % NUMBERs.YEAR_NUM)  / NUMBERs.MONTH_NUM)
      var nowDay   = Math.floor((diff % NUMBERs.MONTH_NUM) / NUMBERs.DAY_NUM)
      var nowHour  = Math.floor((diff % NUMBERs.DAY_NUM)   / NUMBERs.HOUR_NUM)
      var nowMin   = zeroFill(Math.floor((diff % NUMBERs.HOUR_NUM) / NUMBERs.MIN_NUM))
      var nowSec   = zeroFill(Math.floor((diff % NUMBERs.MIN_NUM)  / NUMBERs.SEC_NUM))
      var total = `${nowYear}年${nowMonth}ヶ月${nowDay}日${nowHour}時間${nowMin}分${nowSec}秒`
      componentThis.setState({ totalTime: total })
    }, 1000)
  }

  render() {
    return (
      <StyledTotalPlayingTime isDisplay={!(this.props.currentPath === '/')}>
        <TotalPlayingTimeInner>{`総プレイ時間： ${this.state.totalTime}`}</TotalPlayingTimeInner>
      </StyledTotalPlayingTime>
    )
  }
}

export default TotalPlayingTime
