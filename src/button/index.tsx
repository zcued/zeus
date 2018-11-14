import * as React from 'react'
import styled from '../theme/styled-components'
import Spinner from '../spinner'
import Icon from '../icon'
import { hexa } from '../globals'

interface Props {
  width?: number
  type?: 'primary' | 'ghost'
  loading?: boolean
  disabled?: boolean
  icon?: string
  iconSize?: number
  size?: 'sm' | 'md'
  children?: any
  className?: string
  style?: object
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BaseButton: React.SFC<Props> = ({ children, ...rest }) => <button {...rest}>{children}</button>

const StyledButton = styled(BaseButton)`
  position: relative;
  white-space: nowrap;
  word-break: keep-all;
  text-align: center;
  box-sizing: border-box;
  outline: 0 !important;
  cursor: pointer;
  vertical-align: middle;
  padding: 0 ${({ width }) => (width ? 0 : 24 + 'px')};
  font-size: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1;
  width: ${({ width }) => (width ? width + 'px' : 'auto')};
  height: 40px;
  color: ${({ type, theme }) =>
    type === 'primary' ? theme.palette.white : type === 'ghost' ? hexa(theme.palette.white, 0.8) : theme.palette.black};
  background: ${({ type, theme }) => (type === 'primary' ? theme.palette.primary : 'transparent')};
  border: 4px solid
    ${({ type, theme }) =>
      type === 'primary' ? 'transparent' : type === 'ghost' ? hexa(theme.palette.white, 0.6) : theme.palette.black};
  transition: all 0.3s;

  &:hover {
    color: ${({ type, theme }) => (type === 'ghost' ? theme.palette.white : '')};
    background: ${({ type, theme }) =>
      type === 'primary'
        ? hexa(theme.palette.primary, 0.8)
        : type === 'ghost'
          ? 'transparent'
          : hexa(theme.palette.black, 0.08)};
    border-color: ${({ type, theme }) => (type === 'ghost' ? theme.palette.white : '')};
  }

  &:active {
    color: ${({ type, theme }) => (type === 'ghost' ? theme.palette.white : '')};
    background: ${({ type, theme }) =>
      type === 'primary'
        ? hexa(theme.palette.primary, 0.6)
        : type === 'ghost'
          ? hexa(theme.palette.white, 0.3)
          : hexa(theme.palette.black, 0.16)};
    border-color: ${({ type, theme }) => (type === 'ghost' ? theme.palette.white : '')};
  }

  &[disabled] {
    color: ${({ type, theme }) =>
      type === 'primary'
        ? theme.palette.white
        : type === 'ghost'
          ? hexa(theme.palette.white, 0.16)
          : theme.palette.frost};
    background: ${({ type, theme }) => (type === 'primary' ? theme.palette.stone : 'transparent')};
    border-color: ${({ type, theme }) =>
      type === 'primary' ? 'transparent' : type === 'ghost' ? hexa(theme.palette.white, 0.16) : theme.palette.frost};
    cursor: not-allowed;
  }

  > div {
    margin-right: 8px;
    vertical-align: middle;

    &:only-child {
      margin-right: 0;
    }
  }

  > span {
    vertical-align: middle;
    font-size: 16px;
  }
`

const StyledButtonSm = styled(StyledButton)`
  padding: 0 24px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  border: 1px solid
    ${({ type, theme }) =>
      type === 'primary' ? 'transparent' : type === 'ghost' ? hexa(theme.palette.white, 0.8) : theme.palette.daisy};

  &:hover {
    color: ${({ type, theme }) => (type === 'ghost' ? theme.palette.white : '')};
    background: ${({ type, theme }) => (type === 'primary' ? hexa(theme.palette.primary, 0.8) : 'transparent')};
    border-color: ${({ type, theme }) =>
      type === 'primary' ? 'transparent' : type === 'ghost' ? theme.palette.white : theme.palette.stone};
  }

  &:active {
    color: ${({ type, theme }) => (type === 'ghost' ? theme.palette.white : '')};
    background: ${({ type, theme }) =>
      type === 'primary'
        ? hexa(theme.palette.primary, 0.6)
        : type === 'ghost'
          ? hexa(theme.palette.white, 0.3)
          : 'transparent'};
    border-color: ${({ theme }) => theme.palette.black};
    border-color: ${({ type, theme }) =>
      type === 'primary' ? 'transparent' : type === 'ghost' ? theme.palette.white : ''};
  }

  &[disabled] {
    color: ${({ type, theme }) => (type === 'ghost' ? hexa(theme.palette.white, 0.16) : '')};
    background: ${({ type, theme }) => (type === 'primary' ? theme.palette.stone : 'transparent')};

    &:hover {
      border-color: ${({ type, theme }) =>
        type === 'primary' ? 'transparent' : type === 'ghost' ? hexa(theme.palette.white, 0.16) : theme.palette.frost};
    }
  }

  > span {
    font-size: ${({ theme }) => theme.font.size.sm}px;
  }
`

const StyledButtonMd = styled(StyledButton)`
  padding: 0 24px;
  height: 48px;
  line-height: 40px;

  > span {
    font-size: ${({ theme }) => theme.font.size.md}px;
  }
`

export default ({ children, size, icon, iconSize = 16, disabled, loading, ...rest }: Props) => {
  const Target = size === 'sm' ? StyledButtonSm : size === 'md' ? StyledButtonMd : StyledButton
  return (
    <Target disabled={loading || disabled} {...rest}>
      {loading ? (
        <Spinner size={size ? (size === 'sm' ? 14 : 20) : 16} />
      ) : icon ? (
        <Icon glyph={icon} size={iconSize} />
      ) : null}
      {children ? <span>{children}</span> : null}
    </Target>
  )
}
