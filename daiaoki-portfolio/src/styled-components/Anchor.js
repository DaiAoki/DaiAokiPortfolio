import styled from 'styled-components'
import { media } from '../helpers/Helper'

const Anchor = styled.p`
  text-align: center;
  span {
    display: inline-block;
    background: #f03846;
    color: #fff;
    height: 10vw;
    width: 10vw;
    border-radius: 50%;
    font-family: Trirong,serif;
    text-align: center;
    line-height: 10vw;
    ${ media.pc`
      font-size: 2.4rem;
      width: 80px;
      height: 80px;
      line-height: 80px;
    `}
  }
  p {
    font-size: 1.8rem;
    font-weight: 300;
    color: #444;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 10px;
    ${ media.pc`
      font-size: 2.4rem;
      letter-spacing: 4px;
      margin-top: 20px;
    `}
  }
`

export default Anchor
