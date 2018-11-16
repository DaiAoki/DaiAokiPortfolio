import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import NUMBERs from '../../shared/number'

const StyledMessageBox = styled.div`
  position: absolute;
  top: calc(50% + 240px + (${NUMBERs.MAGICK_NUMBER} * 4));
  left: 50%;
  transform: translateX(-50%);
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.8;
  display: ${ props => props.isDisplay ? 'block' : 'none' };
`
const StyledMessageBoxInner = styled.div`
  border: solid 4px #fff;
  border-radius: 4px;
  width: 50vw;
  height: 130px;
  min-width: 600px;
  padding: ${NUMBERs.MAGICK_NUMBER};
  font-size: 2.0rem;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: pre-wrap;"
`

var timerId
function TypeWriter(_object, message) {
  var messageLength = message.length
  timerId = setInterval(function() {
    _object.innerHTML = message.substr(0, message.length - messageLength)
    messageLength--
    if(messageLength < 0) {
      clearInterval(timerId)
    }
  }, 60)
}
class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        '/contact':   '各種SNSアカウントです。\nお仕事のご依頼等はこちらでお願いします。',
        '/omajinai':  '「何となく動いた」は悪しき習慣です。\n自分の書くコードに "おまじない" はありません。',
        '/item':      '愛用しているアイテムです。\n生産性を上げるためには、出費は惜しみません。',
        '/history':   'これまでの開発実績です。RailsとReactが得意です。\nバックエンド・フロントエンド・インフラ全てできます。',
        '/equipment': 'よく使うソフトウェアです。\nVSCodeがもてはやされる昨今......たとえ化石と揶揄されようと、Emacsを手放すことはできません。',
        '/search':    '「しらべる」に相当する良いコンテンツが思いつきませんでした。\nアイデア募集中。',
        '/status':    'DaiAokiのスキルセットです。\n限りなく広大な宇宙が、光の速さで膨張を続けるように成長しています。(※元ネタ知ってる人とは仲良くなれます!)',
        '/tactics':   '生い立ち・過去のエピソードです。\n人となりが何となくわかってもらえたら幸いです。',
      },
    }
  }

  componentDidMount() {
    const msgBox = document.getElementById('msgBox')
    const message = this.state.messages[this.props.currentPath] || ''
    TypeWriter(msgBox, message)
  }

  componentWillReceiveProps(nextProps) {
    clearInterval(timerId)
    const msgBox = document.getElementById('msgBox')
    const message = this.state.messages[nextProps.currentPath] || ''
    TypeWriter(msgBox, message)
  }

  render() {
    return (
      <StyledMessageBox isDisplay={!(this.props.currentPath === '/')}>
        <StyledMessageBoxInner id='msgBox' />
      </StyledMessageBox>
    )
  }
}

export default MessageBox
