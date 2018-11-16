import portfolio  from '../assets/images/portfolio.png'
import anny       from '../assets/images/anny.png'
import startupGit from '../assets/images/startup-git.png'
import whichone   from '../assets/images/whichone.png'
import xmarket    from '../assets/images/no_image.png'

const initialState = {
  histories: {
    '/history': [
      { id: 1, name: 'ポートフォリオ',      url: 'https://daiaoki.me',         image: portfolio },
      { id: 2, name: 'Anny',                url: 'https://anny.gift/',         image: anny },
      { id: 3, name: 'スタートアップのGit', url: 'http://www.startup-git.com', image: startupGit },
      { id: 4, name: 'whichone',            url: 'localhost:3000',             image: whichone },
      { id: 5, name: 'X-market',            url: 'https://x-market.trade',     image: xmarket },
    ],
  },
  selectedHistoryId: 1,
}

export default function historyReducer(state = initialState, action) {
  switch(action.type) {
  case 'SELECT_HISTORY':
    return {
      ...state,
      selectedHistoryId: action.id,
    }
  default:
    return state
  }
}
