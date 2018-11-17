import portfolio  from '../assets/images/portfolio.png'
import anny       from '../assets/images/anny.png'
import bookhub    from '../assets/images/bookhub.png'
import startupGit from '../assets/images/startup-git.png'
import whichone   from '../assets/images/whichone.png'
import xmarket    from '../assets/images/no_image.png'
import macbookpro from '../assets/images/macbookpro.png'
import hyperjuice from '../assets/images/hyperjuice.png'
import headphone  from '../assets/images/headphone.png'
import emacs      from '../assets/images/emacs.png'
import slack      from '../assets/images/slack.png'
import sequelpro  from '../assets/images/sequelpro.png'

const initialState = {
  subItems: {
    '/history': [
      { id: 1, name: 'ポートフォリオ',      url: 'https://github.com/DaiAoki/DaiAokiPortfolio', image: portfolio  },
      { id: 2, name: 'Anny',                url: 'https://anny.gift/',                          image: anny       },
      { id: 3, name: 'BookHub',             url: 'https://bookhub.jp',                          image: bookhub    },
      { id: 4, name: 'スタートアップのGit', url: 'http://www.startup-git.com',                  image: startupGit },
      { id: 5, name: 'whichone',            url: 'localhost:3000',                              image: whichone   },
      { id: 6, name: 'X-market',            url: 'https://x-market.trade',                      image: xmarket    },
    ],
    '/item': [
      { id: 1, name: 'MacBookPro', image: macbookpro },
      { id: 2, name: 'HyperJuice', image: hyperjuice },
      { id: 3, name: 'WH-1000XM2', image: headphone  },
    ],
    '/equipment': [
      { id: 1, name: 'Emacs',     image: emacs     },
      { id: 2, name: 'Slack',     image: slack     },
      { id: 3, name: 'SequelPro', image: sequelpro },
    ],
  },
  selectedHistoryId: 1,
}

export default function subItemReducer(state = initialState, action) {
  switch(action.type) {
  case 'SELECT_HISTORY':
    return {
      ...state,
      selectedHistoryId: action.id,
    }
  case 'CHANGE_HISTORY':
    return {
      ...state,
      selectedHistoryId: action.id,
    }
  default:
    return state
  }
}
