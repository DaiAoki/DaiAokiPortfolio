import github     from '../assets/images/github-icon.png'
import twitter    from '../assets/images/twitter-icon.png'
import facebook   from '../assets/images/facebook-icon.png'
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
import hoge       from '../assets/images/no_image.png'

const initialState = {
  subItems: {
    '/contact': [
      { id: 1, name: 'GitHub',   image: github,   url: 'https://github.com/DaiAoki'           },
      { id: 2, name: 'Twitter',  image: twitter,  url: 'https://twitter.com/DaiAoki30'        },
      { id: 3, name: 'Facebook', image: facebook, url: 'https://www.facebook.com/dai.aoki.94' },
    ],
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
    '/status': [
      { id: 1, name: 'フロントエンド', skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React']    },
      { id: 2, name: 'バックエンド',   skills: ['Ruby', 'C', 'Java', 'Lisp', 'PHP', 'ShellScript'] },
      { id: 3, name: 'インフラ',       skills: ['AWS', 'Firebase', 'Heroku']                       },
      { id: 4, name: 'その他',         skills: ['MySQL', 'Git', 'SEO']                             },
    ],
    '/tactics': [
      { id: 1, name: 'ガンガンいこうぜ', image: hoge },
      { id: 2, name: 'いろいろやろうぜ', image: hoge },
      { id: 3, name: 'いのちをだいじに', image: hoge },
      { id: 4, name: 'めいれいさせろ',   image: hoge },
    ],
  },
  selectedHistoryId: 1,
  selectedTacticsId: 1,
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
  case 'SELECT_TACTICS':
    return {
      ...state,
      selectedTacticsId: action.id
    }
  default:
    return state
  }
}
