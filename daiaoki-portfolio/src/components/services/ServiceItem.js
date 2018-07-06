import React from 'react'
import Paper from '../../styled-components/Paper'

const tagStyle = {
  display: 'inline-block',
  padding: '3px 6px',
  borderRadius: '2px',
  letterSpacing: '1px',
  webkitBoxShadow: 'inset 0 -2px 0 rgba(27,31,35,0.12)',
  boxShadow: 'inset 0 -2px 0 rgba(27,31,35,0.12)',
  marginLeft: '5px',
  marginBottom: '5px',
}

class ServiceItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReleased: this.props.isReleased,
      name:       this.props.name,
      link:       this.props.link,
      image:      this.props.image,
      tags:       this.props.tags,
      config:     this.props.config,
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
    if(this.state.isReleased === false) e.preventDefault()
  }

  render() {
    const tags = this.state.tags.map((tag, i) => {
      return (
        <li className='service-tag' style={tagStyle}>{tag}</li>
      )
    })

    return (
      <a href={this.state.link} target='_blank' className={this.state.name} style={{display: 'inline-block', width: '100%', marginBottom: '5vw'}}  onClick={(e) => this.handleClick(e)}>
        <Paper>
          <div style={{width: '100%', height: '50vw'}}>
            <img src={ this.state.image } style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px', width: '100%', height: '100%', objectFit: 'fill'}}/>
          </div>
          <div style={{padding: '4vw', lineHeight: '26px'}}>
            <h1 style={{fontSize: '1.7rem', textAlign: 'center', color: '#1f1b7a'}}>{ this.state.name }</h1>
            <h2 style={{textAlign: 'center', textDecoration: 'underline', marginBottom: '11px'}}>{this.state.link}</h2>
            <ul style={{listStyle: 'none'}}>
              { tags }
            </ul>
          </div>
        </Paper>
      </a>
    )
  }
}

export default ServiceItem;
