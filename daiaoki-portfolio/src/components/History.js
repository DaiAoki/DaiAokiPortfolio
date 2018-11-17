import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import FieldContainer from './general/FieldContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import NUMBERs from '../shared/number'

const HistoryItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  &:hover {
    color: yellow;
    text-decoration: underline;
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`
const HistoryImage = styled.img`
  height: 50%;
  max-width: 70%;
  border-radius: 10px;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
  object-fit: contain;
  margin-bottom: ${NUMBERs.MAGICK_NUMBER};
`
const HistoryName = styled.p`
  max-width: 80%;
  font-size: 2.4rem;
  text-shadow: 3px 3px 5px black;
  margin-bottom: 6px;
  ${ media.sp`
    font-size: 1.8rem;
  `}
`
const HistoryUrl = styled.p`
  max-width: 80%;
  font-size: 2.0rem;
  text-shadow: 2px 2px 3px black;
  word-wrap: break-word;
  line-height: 1.3;
  ${ media.sp`
    font-size: 1.4rem;
  `}
`
const Arrow = styled.p`
  position: absolute;
  top: 50%;
  ${ props => props.right ? 'right: 0;' : 'left: 0;'}
  transform: translateY(-50%);
  font-size: 4.0rem;
  padding: ${NUMBERs.MAGICK_NUMBER};
  cursor: pointer;
  ${ media.sp`
    font-size: 2.8rem;
  `}
  &:hover {
    color: yellow;
  }
`
class History extends React.Component {
  render() {
    var selectedHistory = this.props.subItems['/history'].filter((history) => {
      return history.id === this.props.selectedHistoryId
    })[0]
    return (
      <CenteredContainer>
        <FieldContainer>
          <Arrow onClick={() => this.props.changeHistory(selectedHistory.id, -1)}>{`<`}</Arrow>
          <HistoryItem href={selectedHistory.url} target='blank'>
            <HistoryImage src={selectedHistory.image}/>
            <HistoryName>{ selectedHistory.name }</HistoryName>
            <HistoryUrl>{`(${selectedHistory.url})`}</HistoryUrl>
          </HistoryItem>
          <Arrow right={true} onClick={() => this.props.changeHistory(selectedHistory.id, 1)}>{`>`}</Arrow>
        </FieldContainer>
      </CenteredContainer>
    )
  }
}

export default History
