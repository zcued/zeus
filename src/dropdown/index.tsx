import * as React from 'react'
import { noop } from '../globals'
import Icon from '../icon'
import { StyledClickOutSide, Button, PoppersContainer } from './style'

interface Props {
  trigger?: 'hover' | 'click'
  text?: string
  className?: string
  icon?: string
  iconSize?: number
  isOpen?: boolean
  onToggle?: Function
}

class Dropdown extends React.Component<Props> {
  static defaultProps = {
    trigger: 'hover',
    icon: 'angle-down',
    iconSize: 10,
    onToggle: noop
  }

  state = {
    isOpen: this.props.isOpen || false
  }

  isControl: boolean = this.props.hasOwnProperty('isOpen')

  static getDerivedStateFromProps(nextProps: Props) {
    if (nextProps.hasOwnProperty('isOpen')) {
      return {
        isOpen: nextProps.isOpen
      }
    }
    return null
  }

  handleClick = e => {
    if (this.props.trigger === 'click') {
      if (!this.isControl) {
        this.toggle(e)
      } else {
        this.props.onToggle(e)
      }
    }
  }

  handleHover = e => {
    if (this.props.trigger === 'hover') {
      if (!this.isControl) {
        this.toggle(e)
      } else {
        this.props.onToggle(e)
      }
    }
  }

  handleClickOutSide = () => {
    if (!this.isControl) {
      this.setState({ isOpen: false })
    }
  }

  toggle = e => {
    this.props.onToggle(e)

    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { className, text, icon, iconSize, children } = this.props

    const isOpen = this.isControl ? this.props.isOpen : this.state.isOpen

    return (
      <StyledClickOutSide onClick={this.handleClickOutSide}>
        <div className={className} onMouseLeave={this.handleHover} onMouseEnter={this.handleHover}>
          <Button type="button" aria-expanded={isOpen} onClick={this.handleClick}>
            {text}
            <Icon glyph={icon} aira-role="icon" size={iconSize} />
          </Button>
          {isOpen ? (
            <PoppersContainer>
              {this.isControl
                ? children
                : React.Children.map(children, child =>
                    React.cloneElement(React.Children.only(child), {
                      onClick: this.toggle
                    })
                  )}
            </PoppersContainer>
          ) : null}
        </div>
      </StyledClickOutSide>
    )
  }
}

export default Dropdown
