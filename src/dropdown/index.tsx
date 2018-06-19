import * as React from 'react'
import styled, { keyframes } from '../theme/styled-components'
import { noop, zIndex } from '../globals'
import { T } from '../util'
import Icon from '../icon'
import ClickOutSide from './click-outside'

export interface Props {
  trigger?: 'hover' | 'click'
  text?: string
  className?: string
  icon?: string
  iconSize?: number
  isOpen?: boolean
  onToggle?: Function
}

export const StyledClickOutSide = styled(ClickOutSide)`
  display: inline-block;
  background-color: transparent;
  position: relative;
  color: ${T('palette.black')};
`

export const Button = styled.button`
  border: none;
  outline: none;
  padding: ${T('spacing.xs')}px 0;
  cursor: pointer;

  & > [data-icon='true'] {
    margin-left: ${T('spacing.xs')}px;
  }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const PoppersContainer = styled.div`
  opacity: 0;
  position: absolute;
  background-color: ${T('palette.white')};
  animation: ${fadeIn} 0.1s ease-in 0.1s forwards;
  z-index: ${zIndex.dropdown};
  box-shadow: 0 6px 12px ${T('palette.black16')};
  border-radius: 4px;
  min-width: 100%;
`

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
            <Icon glyph={icon} size={iconSize} />
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
