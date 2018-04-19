import * as React from 'react'
import styled from '../theme/styled-components'
import { T, get } from '../util'

interface ButtonProps {
  primary?: boolean
  size?: 'sm' | 'lg'
  className?: string
}

const Button: React.SFC<ButtonProps> = ({ children, ...rest }) => <button {...rest}>{children}</button>

const ButtonStyled = styled(Button)`
  background: ${props => (props.primary ? get(props, 'theme.palette.primary') : 'white')};
  color: ${props => (props.primary ? 'white' : get(props, 'theme.palette.primary'))};
  font-size: ${props => get(props, 'theme.fontSizes.' + props.size)};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${T('palette.primary')};
  text-align: center;
  outline: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => (props.primary ? 'white' : get(props, 'theme.palette.primary'))};
  }
`

export default ButtonStyled
