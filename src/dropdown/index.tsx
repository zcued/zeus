import * as React from 'react'
import { StyledClickOutSide, Button, PoppersContainer } from './style'

interface Props {
  trigger?: 'hover' | 'click'
  text?: string
  className?: string
}

class Dropdown extends React.Component<Props> {
  static defaultProps = {
    trigger: 'hover'
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
    return (
      <StyledClickOutSide onClick={this.handleClickOutSide}>
        <div className={this.props.className} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
          <Button type="button" aria-expanded={this.state.show} onClick={this.handleClick}>
            {this.props.text}
          </Button>
          {this.state.show ? <PoppersContainer>{this.props.children}</PoppersContainer> : null}
        </div>
      </StyledClickOutSide>
    )
  }
}

export default Dropdown
