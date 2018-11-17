import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import NUMBERs from '../shared/number'

const EquipmentList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`
const EquipmentItem = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-right: calc(${NUMBERs.MAGICK_NUMBER} * 2);
  }
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
  img {
    width: 200px;
    filter: drop-shadow(6px 6px 6px rgba(0,0,0,0.6));
    margin-bottom: 10px;
  }
`
class Equipment extends React.Component {
  render() {
    const equipments = this.props.subItems['/equipment'].map((equipment) => {
      return (
        <EquipmentItem key={`item_${equipment.name}`}>
          <img src={equipment.image}/>
          <p>{ equipment.name }</p>
        </EquipmentItem>
      )
    })
    return (
      <CenteredContainer>
        <EquipmentList>
          { equipments }
        </EquipmentList>
      </CenteredContainer>
    )
  }
}

export default Equipment
