import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import FieldContainer from './general/FieldContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'

const TacticsItem = styled.div`
  text-align: center;
  position: relative;
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
`
const Ready = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 6rem;
  color: #9b9b9b;
`
class Tactics extends React.Component {
  render() {
    var selectedTactics = this.props.subItems['/tactics'].filter((tactic) => {
      return tactic.id === this.props.selectedTacticsId
    })[0]
    return (
      <CenteredContainer>
        <FieldContainer>
          <TacticsItem key={`tacticsItem_${selectedTactics.name}`}>
            <img src={selectedTactics.image}/>
            <p>{ selectedTactics.name }</p>
            <Ready>準備中</Ready>
          </TacticsItem>
        </FieldContainer>
      </CenteredContainer>
    )
  }
}

export default Tactics
