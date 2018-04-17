import * as React from 'react'
import styled from '../theme/styled-components'

interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'large'
  className?: string
}

const Button: React.SFC<ButtonProps> = props => <button className={props.className}>{props.children}</button>

const ButtonStyled = styled(Button)`
  background: ${props => (props.primary ? props.theme.primary : 'white')};
  color: ${props => (props.primary ? 'white' : props.theme.primary)};
  font-size: ${props => props.theme['font-size-' + props.size || 'normal']};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.primary};
  text-align: center;
  outline: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => (props.primary ? 'white' : props.theme.primary)};
  }
`

export default ButtonStyled
