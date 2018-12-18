import * as React from 'react'
import Portal from '../portal'
import { Manager, Popper, Reference } from 'react-popper'
import styled, { keyframes } from '../theme/styled-components'
import { T } from '../util'

interface Props {
  placement:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
  title: string | JSX.Element
  mouseEnterDelay?: number
  defaultHovering?: boolean
  className?: string
  overlayClassName?: string
  overlayStyle?: object
  overlayReset?: boolean
}

interface State {
  isHovering: boolean
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ToolTipContainer = styled.div`
  display: inline-block;
`

export const PopperContainer = styled.div`
  &[data-reset='false'] {
    padding: 10px 16px;
    background-color: ${T('palette.white')};
  }

  font-size: ${T('font.size.sm')}px;
  box-shadow: 0 2px 8px ${T('palette.black16')};
  animation: 0.3s ${fadeIn} ease-out;

  &[data-placement|='top'] {
    margin-bottom: 8px;
  }

  &[data-placement|='right'] {
    margin-left: 8px;
  }

  &[data-placement|='bottom'] {
    margin-top: 8px;
  }

  &[data-placement|='left'] {
    margin-right: 8px;
  }
`

export const ReferenceContainer = styled.div`
  display: inline-block;
  font-size: ${T('font.size.sm')}px;
`

class Tooltip extends React.Component<Props, State> {
  static defaultProps = {
    mouseEnterDelay: 0,
    defaultHovering: false,
    overlayReset: false,
    overlayStyle: {}
  }

  state = {
    isHovering: this.props.defaultHovering
  }

  timer = null

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.defaultHovering !== this.props.defaultHovering) {
      this.setState({ isHovering: nextProps.defaultHovering })
    }
  }

  handleEnter = () => {
    if (this.timer) clearTimeout(this.timer)
    if (!this.state.isHovering) {
      this.timer = setTimeout(() => {
        this.setState({ isHovering: true })
      }, this.props.mouseEnterDelay)
    }
  }

  handleLeave = () => {
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.setState({ isHovering: false })
    }, 300)
  }

  handlePopperClick = () => {
    this.setState({ isHovering: false })
  }

  render() {
    const { isHovering } = this.state
    const { placement, children, title, className, overlayClassName, overlayReset, overlayStyle } = this.props

    return (
      <ToolTipContainer className={className} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <Manager>
          <Reference>{({ ref }) => <ReferenceContainer ref={ref}>{children}</ReferenceContainer>}</Reference>
          {isHovering && (
            <Portal>
              <Popper placement={placement}>
                {({ ref, style }) => (
                  <PopperContainer
                    onMouseEnter={this.handleEnter}
                    onMouseLeave={this.handleLeave}
                    onClick={this.handlePopperClick}
                    className={overlayClassName}
                    ref={ref}
                    style={{ ...style, ...overlayStyle }}
                    data-reset={overlayReset}
                    data-placement={placement}
                  >
                    {title}
                  </PopperContainer>
                )}
              </Popper>
            </Portal>
          )}
        </Manager>
      </ToolTipContainer>
    )
  }
}

export default Tooltip
