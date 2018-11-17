import { css } from 'styled-components'

export const media = {
  sp: (...args) => css`
    @media (max-width: 728px) {
      ${  css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 729px) and (max-width: 979px) {
      ${ css(...args) }
    }
  `,
  pc: (...args) => css`
    @media (min-width: 980px) {
      ${  css(...args) }
    }
  `,
}
