import * as React from 'react'
import { StyledClickOutSide, DropdownContainer, Button, PoppersContainer } from './style'

interface Props {
  trigger?: 'hover' | 'click'
  text?: string
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
        <DropdownContainer onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
          <Button type="button" aria-expanded={this.state.show} onClick={this.handleClick}>
            {this.props.text}
          </Button>
          {this.state.show ? <PoppersContainer>{this.props.children}</PoppersContainer> : null}
        </DropdownContainer>
      </StyledClickOutSide>
    )
  }
}

export default Dropdown
