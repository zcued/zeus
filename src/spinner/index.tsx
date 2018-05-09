import * as React from 'react'
import styled, { keyframes } from '../theme/styled-components'

interface Props {
  size?: number
  inline?: boolean
  color?: string
}

const Spinner: React.SFC<Props> = ({ children, ...rest }) => <span {...rest}>{children}</span>

const spin = keyframes`
  to {transform: rotate(360deg);}
`

const hasminus = inline => (inline ? '' : '-')

const StyledSpinner = styled(Spinner)`
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};

  &::before {
    content: '';
    box-sizing: border-box;
    display: inline-block;
    position: ${props => (props.inline ? 'relative' : 'absolute')};
    top: ${props => (props.inline ? '0' : '50%')};
    left: ${props => (props.inline ? '0' : '50%')};
    width: ${props => (props.size ? `${props.size}px` : '16px')};
    height: ${props => (props.size ? `${props.size}px` : '16px')};
    border-radius: 50%;
    border: 2px solid ${props => (props.color ? props.color : props.theme.palette.primary)};
    border-top-color: transparent;
    border-right-color: ${props => (props.color ? props.color : props.theme.palette.primary)};
    border-bottom-color: transparent;
    animation: ${spin} 2s linear infinite;
  }
`

export default StyledSpinner
