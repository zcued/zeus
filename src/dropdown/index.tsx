import * as React from 'react'
import Icon from '../icon'
import { StyledClickOutSide, Button, PoppersContainer } from './style'

interface Props {
  trigger?: 'hover' | 'click'
  text?: string
  className?: string
  icon?: string
  iconSize?: number
}

class Dropdown extends React.Component<Props> {
  static defaultProps = {
    trigger: 'hover',
    icon: 'angle-down',
    iconSize: 10
  }

  state = {
    show: false
  }

  handleClick = () => {
    if (this.props.trigger === 'click') {
      this.setState({ show: !this.state.show })
    }
  }

  handleMouseEnter = () => {
    if (this.props.trigger === 'hover') {
      this.setState({ show: true })
    }
  }

  handleMouseLeave = () => {
    if (this.props.trigger === 'hover') {
      this.setState({ show: false })
    }
  }

  handleClickOutSide = () => {
    this.setState({ show: false })
  }

  render() {
    const { className, text, icon, iconSize, children } = this.props

    return (
      <StyledClickOutSide onClick={this.handleClickOutSide}>
        <div className={className} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
          <Button type="button" aria-expanded={this.state.show} onClick={this.handleClick}>
            {text}
            <Icon glyph={icon} aira-role="icon" size={iconSize} />
          </Button>
          {this.state.show ? <PoppersContainer>{children}</PoppersContainer> : null}
        </div>
      </StyledClickOutSide>
    )
  }
}

export default Dropdown
