import * as React from 'react'
import Portal from '../portal'
import { Manager, Popper, Reference } from 'react-popper'
import { ToolTipContainer, ToolTipContent, ReferenceContainer } from './style'
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

  handleEnter = () => {
    this.setState({ isHovering: true })
  }

  handleLeave = () => {
    this.setState({ isHovering: false })
  }

  render() {
    const { isHovering } = this.state
    const { placement, children, title, className } = this.props
    return (
      <span onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <ReferenceContainer innerRef={ref}>
                {children}
              </ReferenceContainer>
            )}
          </Reference>
          {/* {isHovering && ( */}
            <Portal>
              <Popper placement={placement}>
                {({ ref, style }) => (
                  <ToolTipContainer
                    className={className}
                    innerRef={ref}
                    style={style}
                    data-placement={placement}
                  >
                    <ToolTipContent>
                      {title}
                    </ToolTipContent>
                  </ToolTipContainer>
                )}
              </Popper>
            </Portal>
          {/* )} */}
        </Manager>
      </span>
    )
  }
}

export default Tooltip
