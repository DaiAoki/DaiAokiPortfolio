import React from 'react'
import styled from 'styled-components'
import COLORs from '../../shared/colors'
import { media } from '../../shared/media'
import field from '../../assets/images/field.png'

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
  height: 30vw;
  min-width: 600px;
  min-height: 360px;
  background-image: url(${field});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
