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
  width: 50%;
  height: 50%;
  border-radius: 4px;
  text-shadow: 5px 5px 8px black;
  margin-bottom: ${NUMBERs.MAGICK_NUMBER};
  object-fit: contain;
`
const HistoryName = styled.p`
  font-size: 2.4rem;
  margin-bottom: 6px;
`
const HistoryUrl = styled.p`
  font-size: 2.0rem;
`
class History extends React.Component {
  render() {
    var selectedHistory = this.props.histories['/history'].filter((history) => {
      return history.id === this.props.selectedHistoryId
    })[0]
    return (
      <CenteredContainer>
        <FieldContainer>
          <HistoryItem href={selectedHistory.url} target='blank'>
            <HistoryImage src={selectedHistory.image}/>
            <HistoryName>{ selectedHistory.name }</HistoryName>
            <HistoryUrl>{`(${selectedHistory.url})`}</HistoryUrl>
          </HistoryItem>
        </FieldContainer>
      </CenteredContainer>
    )
  }
}

export default History
