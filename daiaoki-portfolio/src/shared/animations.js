import { keyframes } from 'styled-components'

const ANIMATIONs = {
  FLASHING: keyframes`
    0% {opacity: 1} 40% {opacity: 0} 43% {opacity: 1} 55% {opacity: 1} 70% {opacity: 0.1} 73% {opacity: 1} 76% {opacity: 0.1} 79% {opacity: 1} 100% {opacity: 1}
  `,
  MONSTER: keyframes`
    0% {transform: translateY(0)} 15% {transform: translateY(0)} 27% {transform: translateY(-10%) scale(1.1)} 34% {transform: translateY(0)} 46% {transform: translateY(-10%) scale(1.1)} 53% {transform: translateY(0)} 60% {transform: translateY(0)} 72% {transform: translateY(-20%) scale(1.1)} 80% {transform: translateY(0)} 100% {transform: translateY(0)}
  `,
}
export default ANIMATIONs
