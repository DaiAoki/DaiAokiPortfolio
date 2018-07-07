import { css, keyframes } from 'styled-components'

export const media = {
  // sp including tablet
  sp: (...args) => css`
    @media (max-width: 768px) {
      ${  css(...args) }
    }
  `,
  pc: (...args) => css`
    @media (min-width: 769px) {
      ${  css(...args) }
    }
  `
}
