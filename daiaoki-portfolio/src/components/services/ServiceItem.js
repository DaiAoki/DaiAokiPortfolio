import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { media } from '../../helpers/Helper'
import Paper from '../../styled-components/Paper'
import MomentModal from '../shared/MomentModal'

const ServiceItemWrap = styled.a`
  display: inline-block;
  width: 100%;
  margin-bottom: 5vw;
  align-self: stretch;
  ${ media.pc`
    width: 43%;
  `}
`

const ServiceImage = styled.div`
  width: 100%;  height: 50vw;
  position: relative;
  ${ media.pc`
    height: 24vw;
  `}
  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 26px rgba(77, 77, 77, 0.1);
  }
`

const ServiceInfo = styled.div`
  padding: 4vw;
  line-height: 26px;
  ${ media.pc`
    padding: 2vw;
    line-height: 32px;
  `}
`

const ServiceTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  color: #1f1b7a;
  ${ media.pc`
    font-size: 2.2rem;
  `}
`

const ServiceLink = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 11px;
  ${ media.pc`
    font-size: 1.7rem;
  `}
`

const Tag = styled.li`
  display: inline-block;
  padding: 3px 6px;
  border-radius: 2px;
  letter-spacing: 1px;
  -webkit-box-shadow: inset 0 -2px 0 rgba(27,31,35,0.12);
  box-shadow: inset 0 -2px 0 rgba(27,31,35,0.12);
  margin-left: 7px;
  margin-bottom: 7px;
  ${ media.pc`
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 1.5rem;
  `}
`

class ServiceItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReleased:   this.props.isReleased,
      name:         this.props.name,
      link:         this.props.link,
      image:        this.props.image,
      tags:         this.props.tags,
      config:       this.props.config,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const config = {
      origin:      this.state.config.origin,
      distance:    this.state.config.distance,
      duration:    this.state.config.duration,
      delay:       this.state.config.delay,
      opacity:     this.state.config.opacity,
      scale:       this.state.config.scale,
      easing:      this.state.config.easing,
      mobile:      this.state.config.mobile,
      reset:       this.state.config.reset,
      userDelay:   this.state.config.useDelay,
      viewFactore: this.state.config.viewFactor,
      viewOffset:  this.state.config.viewOffset,
    }

    window.sr.reveal(`.${this.state.name}`, config)
  }

  handleClick(e) {
    if(this.state.isReleased === false) {
      e.preventDefault()
      ReactDOM.render(
        <MomentModal byID={this.state.name} count={1500}>
          <p style={{color: '#505050', fontSize: '1.6rem', lineHeight: '2.2rem'}}>{`${this.state.name}は準備中です。`}</p>
        </MomentModal>,
        document.getElementById(this.state.name)
      )
    }
  }

  render() {
    const tags = this.state.tags.map((tag, i) => {
      return (
        <Tag className='service-tag'>{ tag }</Tag>
      )
    })

    return (
      <React.Fragment>
        <div id={`${this.state.name}`}/>
        <ServiceItemWrap href={this.state.link} target='_blank' className={this.state.name} onClick={(e) => this.handleClick(e)}>
          <Paper>
            <ServiceImage>
              <img src={ this.state.image } style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px', width: '100%', height: '100%', objectFit: 'fill'}}/>
            </ServiceImage>
            <ServiceInfo>
              <ServiceTitle>{ this.state.name }</ServiceTitle>
              <ServiceLink>{ this.state.link }</ServiceLink>
              <ul style={{listStyle: 'none'}}>
                { tags }
              </ul>
            </ServiceInfo>
          </Paper>
        </ServiceItemWrap>
      </React.Fragment>
    )
  }
}

export default ServiceItem;
