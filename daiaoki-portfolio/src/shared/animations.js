import { keyframes } from 'styled-components'

const ANIMATIONs = {
  FLASHING: keyframes`
    0% {opacity: 1} 40% {opacity: 0} 43% {opacity: 1} 55% {opacity: 1} 70% {opacity: 0.1} 73% {opacity: 1} 76% {opacity: 0.1} 79% {opacity: 1} 100% {opacity: 1}
  `,
}
export default ANIMATIONs
