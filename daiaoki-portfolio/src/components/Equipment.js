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
  ${ media.sp`
    flex-wrap: wrap;
  `}
`
const EquipmentItem = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-right: calc(${NUMBERs.MAGICK_NUMBER} * 2);
    ${ media.sp`
      margin-right: 0;
    `}
  }
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
  ${ media.sp`
    flex-basis: 50%;
    width: 50%;
    &:nth-child(1) {
      flex-basis: 51%;
    }
  `}
  img {
    width: 200px;
    filter: drop-shadow(6px 6px 6px rgba(0,0,0,0.6));
    margin-bottom: 10px;
    ${ media.sp`
      width: 120px;
      margin-bottom: 0;
    `}
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
