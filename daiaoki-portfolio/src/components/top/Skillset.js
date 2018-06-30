import React from 'react'
import Container from '../../styled-components/Container'
import Anchor from '../../styled-components/Anchor'
import styled from 'styled-components'

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
  line-height: 30px;
  border-radius: 4px;
  box-shadow:0.5px 1px 1.5px #999;
  background-color: #fff;
  &:last-child {
    margin-right: 8vw;
  }
`

const PaperCarouselTitle = styled.h2`
  font-family: Trirong,serif;
  color: #20252e;
  letter-spacing: 2px;
  margin-bottom: 4px;
`

const PaperCarouselItem = styled.span`
  display: inline-block;
  color: #777;
  letter-spacing: 0.5px;
  font-size: 15px;
  &:not(:last-child) {
    margin-right: 11px;
  }
`

class Skillset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsets: [{title: 'Language', items: ['Ruby', 'C', 'Lisp', 'Java', 'PHP', 'Ruby on Rails4', 'Ruby on Rails5']},
                  {title: 'Markup', items: ['HTML5', 'Haml', 'Slim', 'Sass', 'SCSS', 'CSS5']},
                  {title: 'JS', items: ['JavaScript', 'React', 'Redux', 'Vue', 'jQuery']},
                  {title: 'Other/Infra', items: ['Git', 'ShellScript', 'GAS', 'MySQL', 'AWS', 'Firebase', 'Heroku', 'Emacs', 'SEO']},
                 ]
    }
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
      <section className='u-mb-l'>
        <Anchor className='u-mb-s'>
          <span>02.</span>
          <p>Skillset</p>
        </Anchor>
        <Container>
          <PaperCarousel>
            { skillsets }
          </PaperCarousel>
        </Container>
      </section>
    )
  }
}

export default Skillset;
