import React from 'react'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import { media } from '../../shared/media'
import field from '../../assets/images/field.png'
import NUMBERs from '../../shared/number'

const Container = styled.div`
  background-color: ${COLORs.BASE_COLOR};
  border-radius: 4px;
  padding: 2px;
`
const ContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 4px #fff;
  border-radius: 4px;
  width: 50vw;
  height: 40vh;
  background-image: url(${field});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  ${ media.pc`
    min-width: 300px;
    max-width: 600px;
  `}
  ${ media.tablet`
    width: 65vw;
    height: 35vh;
  `}
  ${ media.sp`
    width: calc(100vw - (${NUMBERs.MAGICK_NUMBER} * 2));
  height: 40vh;
  `}
`
class FieldContainer extends React.Component {
  render() {
    return (
      <Container>
        <ContainerInner>
          { this.props.children }
        </ContainerInner>
      </Container>
    )
  }
}

export default FieldContainer
