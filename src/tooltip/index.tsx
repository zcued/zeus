import * as React from 'react'
import Portal from '../portal'
import { Manager, Popper, Reference } from 'react-popper'
import { ToolTipContainer, ReferenceContainer } from './style'

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
      <Manager>
        <Reference>
          {({ ref }) => (
            <ReferenceContainer onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} innerRef={ref}>
              {children}
            </ReferenceContainer>
          )}
        </Reference>
        {isHovering && (
          <Portal>
            <Popper placement={placement}>
              {({ ref, style }) => (
                <ToolTipContainer
                  onMouseEnter={this.handleEnter}
                  onMouseLeave={this.handleLeave}
                  className={className}
                  innerRef={ref}
                  style={style}
                  data-placement={placement}
                >
                  {title}
                </ToolTipContainer>
              )}
            </Popper>
          </Portal>
        )}
      </Manager>
    )
  }
}

export default Tooltip
