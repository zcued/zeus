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
    const { placement, children, title } = this.props
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <ReferenceContainer innerRef={ref} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
              {children}
            </ReferenceContainer>
          )}
        </Reference>
        {isHovering && (
          <Portal>
            <Popper placement={placement}>
              {({ ref, style }) => (
                <ToolTipContainer innerRef={ref} style={style} data-placement={placement}>
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
