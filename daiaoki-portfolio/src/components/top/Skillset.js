import React from 'react'
import Container from '../../styled-components/Container'
import Anchor from '../../styled-components/Anchor'
import styled from 'styled-components'
import { media } from '../../helpers/Helper'

const PaperCarousel = styled.ul`
  list-style: none;
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  margin-left: -8vw;
  padding-left: 8vw;
  margin-right: -8vw;
  padding-bottom: 2px;
`

const PaperCarouselList = styled.li`
  display: inline-block;
  vertical-align: top;
  margin-right: 4vw;
  width: 50vw;
  word-wrap: normal;
  white-space: normal;
  padding: 4vw;
  line-height: 3.0rem;
  border-radius: 4px;
  box-shadow:0.5px 1px 1.5px #999;
  background-color: #fff;
  &:last-child {
    margin-right: 8vw;
  }
  ${ media.pc`
    width: 30vw;
    padding: 3vw;
  `}
`

const PaperCarouselTitle = styled.h2`
  font-family: Trirong,serif;
  font-size: 1.5rem;
  color: #20252e;
  letter-spacing: 2px;
  margin-bottom: 4px;
  ${ media.pc`
    font-size: 2.0rem;
  `}
`

const PaperCarouselItem = styled.span`
  display: inline-block;
  color: #777;
  letter-spacing: 0.5px;
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-right: 11px;
  }
  ${ media.pc`
    font-size: 1.6rem;
  `}
`

const CenterCircle = styled.div`
  position: absolute;
  top: 18vw;
  right: 16vw;
  padding: 24vw;
  border-radius: 50%;
  background-color: #ffbfbf;
  z-index: -1;
  ${ media.pc`
    right: 10vw;
    padding: 14vw;
  `}
`

class Skillset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsets: [{title: 'Language', items: ['Ruby', 'C', 'Lisp', 'Java', 'PHP', 'Ruby on Rails4', 'Ruby on Rails5']},
                  {title: 'Markup', items: ['HTML5', 'Haml', 'Slim', 'Sass', 'SCSS', 'CSS3']},
                  {title: 'JS', items: ['JavaScript', 'React', 'Redux', 'Vue', 'jQuery']},
                  {title: 'Other/Infra', items: ['Git', 'ShellScript', 'GAS', 'MySQL', 'AWS', 'Firebase', 'Heroku', 'Emacs', 'SEO']},
                 ]
    }
  }

  componentDidMount() {
    const config = {
      origin:      'right',
      distance:    '200vw',
      duration:    1500,
      delay:       200,
      opacity:     0,
      scale:       1,
      easing:      'ease',
      mobile:      true,
      reset:       false,
      userDelay:   'always',
      viewFactore: 0.2,
      viewOffset:  { top: 0, right: 0, bottom: 0, left: 0 },
    }

    window.sr.reveal('.skillset', config)
  }

  render() {
    const skillsets = this.state.skillsets.map((set, i) => {
      const items = set.items.map((item, ii) => <PaperCarouselItem key={i * ii}>{item}</PaperCarouselItem>)
      return (
        <PaperCarouselList key={i}>
          <PaperCarouselTitle>{set.title}</PaperCarouselTitle>
          { items }
        </PaperCarouselList>
      )
    })

    // 年表は、縦書きにして自動で横スライドさせる。特筆すべきところで赤文字に変化させるなどのanimationを加える。
    return (
      <section className='u-mb-l' style={{position: 'relative'}}>
        <Anchor className='u-mb-s'>
          <span>02.</span>
          <p>Skillset</p>
        </Anchor>
        <Container>
          <PaperCarousel className='skillset'>
            { skillsets }
          </PaperCarousel>
        </Container>
        <CenterCircle/>
      </section>
    )
  }
}

export default Skillset;
