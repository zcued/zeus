import * as React from 'react'
import Icon from '../icon'
import { StyledClickOutSide, Button, PoppersContainer } from './style'

interface Props {
  trigger?: 'hover' | 'click'
  text?: string
  className?: string
  icon?: string
  iconSize?: number
  isOpen?: boolean
  onClick?: Function
}

class Dropdown extends React.Component<Props> {
  static defaultProps = {
    trigger: 'hover',
    icon: 'angle-down',
    iconSize: 10
  }

  state = {
    isOpen: this.props.isOpen || false
  }

  isControl: boolean = this.props.hasOwnProperty('isOpen')

  getDerivedStateFromProps(nextProps: Props) {
    if (this.isControl) {
      return {
        isOpen: nextProps.isOpen
      }
    }
    return null
  }

  handleClick = () => {
    if (this.props.trigger === 'click' && !this.isControl) {
      this.toggle()
    }

    const { onClick } = this.props
    if (onClick) onClick()
  }

  handleHover = () => {
    if (this.props.trigger === 'hover' && !this.isControl) {
      this.toggle()
    }
  }

  handleClickOutSide = () => {
    if (!this.isControl) {
      this.setState({ isOpen: false })
    }
  }

  toggle = () => {
    const { onClick } = this.props
    if (onClick) onClick()

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
              {React.Children.map(children, child =>
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
