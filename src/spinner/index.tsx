import * as React from 'react'
import styled, { keyframes, css } from '../theme/styled-components'

interface Props {
  size?: number
  color?: string
  backgroundColor?: string
  opacity?: number
  top?: number
  minHeight?: number
  spinning?: boolean
  className?: string
  children?: any
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

class Spinner extends React.Component<Props> {
  render() {
    const { children, className } = this.props

    return (
      <div className={className}>
        {children}
        {children ? <div data-spinner-shadow="true" /> : null}
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-spinner="true">
          <path d="M34.558 25.9a9.6 9.6 0 1 0-4.531 7.28l5.968 3.446c-5.007 4.74-12.718 5.852-18.994 2.228-7.651-4.417-10.273-14.201-5.855-21.853 4.417-7.651 14.201-10.273 21.853-5.855 6.455 3.727 9.33 11.274 7.418 18.137L34.558 25.9zm2.547 9.445l-6.112-3.528c.432-.386.831-.817 1.19-1.292l5.964 3.443c-.325.482-.674.942-1.042 1.377zm2.65-4.406a16.088 16.088 0 0 1-.725 1.56l-5.944-3.432c.263-.527.47-1.07.623-1.62l6.047 3.492zM47 39a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      </div>
    )
  }
}

const SpinnerStyled = styled(Spinner)`
  position: relative;
  min-height: ${({ minHeight }) => (minHeight ? minHeight + 'px' : '')};
  display: ${({ children }) => (children ? 'block' : 'inline-block')};

  > [data-spinner-shadow='true'] {
    display: ${({ spinning }) => (spinning === false ? 'none' : 'block')};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ backgroundColor, theme }) => backgroundColor || theme.palette.white};
    opacity: ${({ opacity }) => (opacity || opacity === 0 ? opacity : 1)};
  }

  > [data-spinner='true'] {
    display: ${({ spinning }) => (spinning === false ? 'none' : 'block')};
    width: ${({ size }) => size || 50}px;
    height: ${({ size }) => size || 50}px;
    animation: ${spin} 1.75s ease infinite;
    animation-play-state: ${({ spinning }) => (spinning === false ? 'paused' : 'running')};

    ${({ children }) =>
      children
        ? css`
            position: absolute;
            top: ${({ top }) => (top || top === 0 ? top + 'px' : '50%')};
            left: 50%;
            margin-top: -${({ top, size }) => (top || top === 0 ? 0 : size ? size / 2 : 50 / 2)}px;
            margin-left: -${({ size }) => (size ? size / 2 : 50 / 2)}px;
          `
        : null} path {
      fill: ${({ color, theme }) => color || theme.palette.primary};
    }
  }
`

export default SpinnerStyled
