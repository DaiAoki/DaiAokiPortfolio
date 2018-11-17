import { keyframes } from 'styled-components'

const ANIMATIONs = {
  FLASHING: keyframes`
    0%{opacity: 1} 40%{opacity: 0} 43%{opacity: 1} 55%{opacity: 1} 70%{opacity: 0.1} 73%{opacity: 1} 76%{opacity: 0.1} 79%{opacity: 1} 100%{opacity: 1}
  `,
  MONSTER: keyframes`
    0%{transform: translateY(0)} 15%{transform: translateY(0)} 27%{transform: translateY(-10%) scale(1.1)} 34%{transform: translateY(0)} 46%{transform: translateY(-10%) scale(1.1)} 53%{transform: translateY(0)} 60%{transform: translateY(0)} 72%{transform: translateY(-20%) scale(1.1)} 80%{transform: translateY(0)} 100%{transform: translateY(0)}
  `,
  NOMORE_ONE: keyframes`
    0%{transform: rotate(50deg)} 10%{transform: rotate(-40deg)} 14%{transform: rotate(-35deg)} 20%{transform: rotate(30deg)} 23%{transform: rotate(20deg)} 26%{transform: rotate(-15deg)} 30%{transform: rotate(5deg)} 32%{transform: rotate(0deg)} 100%{transform: rotate(0deg)}
  `,
  NOMORE_TWO: keyframes`
    0%{transform: translateY(-100%) rotate(-50deg)} 10%{transform: translateY(-100%) rotate(40deg)} 14%{transform: translateY(-100%) rotate(35deg)} 20%{transform: translateY(-100%) rotate(-30deg)} 23%{transform: translateY(-100%) rotate(-20deg)} 26%{transform: translateY(-100%) rotate(15deg)} 30%{transform: translateY(-100%) rotate(-5deg)} 32%{transform: translateY(-100%) rotate(0deg)} 100%{transform: translateY(-100%) rotate(0deg)}
  `,
  MENU_ICON: keyframes`
  0%{transform: scale(1) rotate(0deg)} 5%{transform: scale(1) rotate(0deg)} 7%{transform: scale(1.3) rotate(0deg)} 10%{transform: scale(1.3) rotate(0deg)} 15%{transform: scale(1) rotate(0deg)}
  20%{transform: scale(1) rotate(0deg)} 22%{transform: scale(1.3) rotate(0deg)} 25%{transform: scale(1.3) rotate(0deg)} 30%{transform: scale(1) rotate(0deg)}
  40%{transform: scale(1) rotate(0deg)} 50%{transform: scale(1) rotate(360deg)}
  100%{transform: rotate(0deg)}
  `,
}
export default ANIMATIONs
