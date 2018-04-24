import * as React from 'react'
import styled from '../theme/styled-components'
import Spinner from '../spinner'
import Icon from '../icon'
import { hexa } from '../globals'
import { T } from '../util'

interface ButtonProps {
  primary?: boolean
  loading?: boolean
  ghost?: boolean
  disabled?: boolean
  icon?: string
  size?: 'sm' | 'md' | 'lg'
  children?: any
}

const BaseButton: React.SFC<ButtonProps> = ({ children, ...rest }) => <button {...rest}>{children}</button>

const StyledButton = styled(BaseButton)`
  position: relative;
  display: inline-flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  word-break: keep-all;
  text-align: center;
  box-sizing: border-box;
  outline: 0 !important;
  cursor: pointer;
  font-size: ${({ size, theme }) => (size ? (theme.font.size[size] || 16) + 'px' : '16px')};
  background: ${({ primary, theme }) => (primary ? theme.palette.primary : theme.palette.white)};
  color: ${({ primary, theme }) => (primary ? theme.palette.white : theme.palette.black)};
  padding: ${props => (props.size ? '8px' : '4px')} 32px;
  border: 4px solid ${({ primary, theme }) => (primary ? 'transparent' : theme.palette.black)};
`

const SolidButton = StyledButton.extend`
  &:hover {
    background: ${({ primary, theme }) => (primary ? hexa(theme.palette.primary, 0.8) : theme.palette.daisy)};
  }

  &:active {
    color: ${({ primary, theme }) => (primary ? theme.palette.white : theme.palette.black)};
  }
`

const DisabledButton = StyledButton.extend`
  border-color: ${({ primary, theme }) => (primary ? 'transparent' : theme.palette.frost)};
  color: ${T('palette.frost')};
`

export default ({ children, icon, disabled, loading, ...rest }: ButtonProps) => {
  const Button = disabled ? DisabledButton : SolidButton
  return (
    <Button disabled={loading || disabled} {...rest}>
      {icon ? loading ? <Spinner size={16} inline={true} /> : <Icon glyph={icon} /> : ''}
      {children}
    </Button>
  )
}
