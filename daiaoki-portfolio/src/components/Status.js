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
  ${ media.sp`
    line-height: 1.3;
    font-size: 1.3rem;
  `}
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
  padding: ${NUMBERs.MAGICK_NUMBER};
  ${ media.sp`
    padding: ${NUMBERs.MAGICK_NUMBER};
  `}
`
const ProfileHeader = styled.p`
  img {
    height: 18px;
    vertical-align: middle;
    margin-right: 6px;
    ${ media.sp`
      height: 15px;
      margin-right: 5px;
    `}
  }
`
const EquipP = styled.p`
  &:before {
    content: 'E';
    margin-right: 10px;
  }
`
const StatusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: solid 4px #fff;
  border-radius: 4px;
  width: 200px
  padding: ${NUMBERs.MAGICK_NUMBER} 0;
  padding-left: calc(${NUMBERs.MAGICK_NUMBER} * 2);
  ${ media.pc`
    width: 400px
  `}
  ${ media.sp`
    width: 130px
    padding: ${NUMBERs.MAGICK_NUMBER};
  `}
`
const StatusItem = styled.p`
  flex-basis: 100%;
  width: 100%;
  letter-spacing: 3px;
  ${ media.pc`
    flex-basis: 50%;
    width: 50%;
  `}
  ${ media.sp`
    letter-spacing: 1px;
  `}
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
            <StatusList>
              { statusItems }
            </StatusList>
          </StatusContainer>
        </StatusWrapper>
      </CenteredContainer>
    )
  }
}

export default Status
