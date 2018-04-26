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
  size?: 'sm' | 'md'
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
  vertical-align: middle;
  padding: 5px 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: ${({ primary, theme }) => (primary ? theme.palette.white : theme.palette.black)};
  background: ${({ primary, theme }) => (primary ? theme.palette.primary : 'transparent')};
  border: 4px solid ${({ primary, theme }) => (primary ? 'transparent' : theme.palette.black)};
  transition: background .3s;

  &:hover {
    background: ${({ primary, theme }) => (primary ? hexa(theme.palette.primary, 0.8) : theme.palette.daisy)};
  }

  &:active {
    color: ${({ primary, theme }) => (primary ? theme.palette.white : theme.palette.black)};
  }

  &[disabled] {
    color: ${({ primary, theme }) => (primary ? theme.palette.white : theme.palette.frost)};
    background: ${({ primary, theme }) => (primary ? theme.palette.frost : 'transparent')};
    border-color: ${({ primary, theme }) => (primary ? 'transparent' : theme.palette.frost)};
    cursor: not-allowed;

    &:hover {
      background: ${({ primary, theme }) => (primary ? theme.palette.frost : 'transparent')};
    }
  }
`

const StyledButtonSm = StyledButton.extend`
  padding: 9px 7px;
  font-size: ${({theme}) => theme.font.size.sm}px;
  font-weight: normal;
  line-height: ${({theme}) => theme.font.lineHeight.sm}px;
  border: 1px solid ${({ primary, theme }) => (primary ? 'transparent' : theme.palette.daisy)};
`

const StyledButtonMd = StyledButton.extend`
  padding: 6px 24px;
  font-size: ${({theme}) => theme.font.size.md}px;;
  line-height: ${({theme}) => theme.font.lineHeight.md}px;
`

export default ({ children, size, icon, disabled, loading, ...rest }: ButtonProps) => {
  const Button = size === 'sm' ? StyledButtonSm : (size === 'md' ? StyledButtonMd : StyledButton)
  return (
    <Button disabled={loading || disabled} {...rest}>
      {icon ? loading ? <Spinner size={16} inline={true} /> : <Icon glyph={icon} /> : ''}
      {children}
    </Button>
  )
}
