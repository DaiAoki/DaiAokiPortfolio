import React from 'react'
import styled from 'styled-components'
import CenteredContainer from './general/CenteredContainer'
import COLORs from '../shared/colors'
import { media } from '../shared/media'
import NUMBERs from '../shared/number'
import profile from '../assets/images/profile.jpg'

const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.6;
`
const StatusContainer = styled.div`
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
  opacity: 0.8;
`
const BlackInner = styled.div`
  border: solid 4px #fff;
  border-radius: 4px;
  padding: ${ props => props.width ? `${NUMBERs.MAGICK_NUMBER} calc(${NUMBERs.MAGICK_NUMBER} * 4) ${NUMBERs.MAGICK_NUMBER} calc(${NUMBERs.MAGICK_NUMBER} * 2);` : `${NUMBERs.MAGICK_NUMBER};` }
`
const ProfileHeader = styled.p`
  img {
    height: 18px;
    vertical-align: middle;
    margin-right: 6px;
  }
`
const EquipP = styled.p`
  &:before {
    content: 'E';
    margin-right: 10px;
  }
`
const StatusItem = styled.p`
  letter-spacing: 3px;
`
class Status extends React.Component {
  render() {
    const statusItems = this.props.subItems['/status'].map((item) => {
      return item.skills.map((skill) => {
        return (
          <StatusItem key={`statusItem_${skill}`}>
            <p>{ skill }</p>
          </StatusItem>
        )
      })
    })
    const equipPs = this.props.subItems['/status'].map((item) => { return <EquipP>{ item.name }</EquipP> })
    return (
      <CenteredContainer>
        <StatusWrapper>
          <StatusContainer>
            <BlackInner style={{marginBottom: '2px'}}>
              <ProfileHeader>
                <img src={profile}/>
                青木大(DaiAoki)
              </ProfileHeader>
              <p>WebDeveloper</p>
              <p>年齢: 27歳</p>
              <p>HP: 999</p>
              <p>MP: 50</p>
            </BlackInner>
            <BlackInner>
              { equipPs }
            </BlackInner>
          </StatusContainer>
          <StatusContainer>
            <BlackInner width={true}>
              { statusItems }
            </BlackInner>
          </StatusContainer>
        </StatusWrapper>
      </CenteredContainer>
    )
  }
}

export default Status
