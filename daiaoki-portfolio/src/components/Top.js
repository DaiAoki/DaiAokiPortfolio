import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import COLORs from '../shared/colors'
import ANIMATIONs from '../shared/animations'
import { media } from '../shared/media'

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORs.BASE_COLOR};
  position: relative;
`
const StartEngineerLife = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 2.0rem;
  letter-spacing: 6px;
  cursor: pointer;
  animation: ${ANIMATIONs.FLASHING} 3.0s linear infinite;
  &:hover {
    color: yellow;
  }
`
class Top extends React.Component {
  render() {
    // ボタンを押したら、冒険するという文字が回転して拡大して広がるアニメーションを入れる。
    // デフォのlinkを無効にして、classを付け替えて実装する
    return (
      <TopContainer>
        <StartEngineerLife to="/status">冒険する</StartEngineerLife>
      </TopContainer>
    )
  }
}

export default Top
