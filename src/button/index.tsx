import * as React from 'react'
import styled from '../theme/styled-components'
import Spinner from '../spinner'
import Icon from '../icon'
import { hexa } from '../globals'

interface Props {
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
  padding: 8px 24px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1;
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
  > div,
  [data-icon='true'] {
    margin-right: 8px;
    vertical-align: middle;
  }

  > div,
  > span {
    vertical-align: middle;
  }
`

const StyledButtonSm = StyledButton.extend`
  font-size: ${({ theme }) => theme.font.size.sm}px;
  padding: 11px 24px;
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
`

const StyledButtonMd = StyledButton.extend`
  padding: 10px 24px;
  font-size: ${({ theme }) => theme.font.size.md}px;
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
      <span>{children}</span>
    </Target>
  )
}
