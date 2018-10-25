import * as React from 'react'
import styled, { keyframes } from '../theme/styled-components'
import { noop, zIndex } from '../globals'
import { T } from '../util'
import Icon from '../icon'
import ClickOutSide from './click-outside'

type Trigger = 'hover' | 'click'

export interface Props {
  trigger?: Trigger
  text?: string | JSX.Element
  className?: string
  icon?: string
  iconSize?: number
  isOpen?: boolean
  mouseLeaveDelay?: number
  onToggle?: Function
}

export const StyledClickOutSide = styled(ClickOutSide)`
  display: inline-block;
  background-color: transparent;
  position: relative;
  color: ${T('palette.black')};
`

export const TextContainer = styled.div`
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
  min-width: 100%;
`

class Dropdown extends React.Component<Props> {
  static defaultProps: Props = {
    trigger: 'hover',
    icon: 'angle-down',
    iconSize: 10,
    onToggle: noop,
    mouseLeaveDelay: 300
  }

  state = {
    isOpen: this.props.isOpen || false
  }

  isControl: boolean = this.props.hasOwnProperty('isOpen')
  timer = null

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

  handleLeave = e => {
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (this.props.trigger === 'hover') {
        if (!this.isControl) {
          this.setState({ isOpen: true })
        } else {
          this.props.onToggle(e)
        }
      }
    }, this.props.mouseLeaveDelay)
  }

  handleEnter = e => {
    if (this.timer) clearTimeout(this.timer)
    if (this.props.trigger === 'hover') {
      if (!this.isControl) {
        this.setState({ isOpen: true })
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
        <div className={className}>
          <TextContainer
            data-text={true}
            aria-expanded={isOpen}
            onClick={this.handleClick}
            onMouseLeave={this.handleLeave}
            onMouseEnter={this.handleEnter}
          >
            {text}
            {icon ? <Icon glyph={icon} size={iconSize} /> : null}
          </TextContainer>
          {isOpen ? (
            <PoppersContainer>
              {this.isControl
                ? children
                : React.Children.map(children, child =>
                    React.cloneElement(React.Children.only(child), {
                      onClick: this.toggle,
                      onMouseEnter: this.handleEnter,
                      onMouseLeave: this.handleLeave
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
