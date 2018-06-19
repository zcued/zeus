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
  title: JSX.Element
  className?: string
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
  padding: ${T('spacing.xs')}px;
  font-size: ${T('font.size.sm')}px;
  background-color: ${T('palette.white')};
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
  state = { isHovering: false }
  timer = null

  handleEnter = () => {
    if (this.timer) clearTimeout(this.timer)
    if (!this.state.isHovering) this.setState({ isHovering: true })
  }

  handleLeave = () => {
    this.timer = setTimeout(() => {
      this.setState({ isHovering: false })
    }, 300)
  }

  render() {
    const { isHovering } = this.state
    const { placement, children, title, className } = this.props

    return (
      <ToolTipContainer onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <Manager>
          <Reference>{({ ref }) => <ReferenceContainer innerRef={ref}>{children}</ReferenceContainer>}</Reference>
          {isHovering && (
            <Portal>
              <Popper placement={placement}>
                {({ ref, style }) => (
                  <PopperContainer
                    onMouseEnter={this.handleEnter}
                    onMouseLeave={this.handleLeave}
                    className={className}
                    innerRef={ref}
                    style={style}
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
