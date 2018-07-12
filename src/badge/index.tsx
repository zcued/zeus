import * as React from 'react'
import styled, { css } from '../theme/styled-components'
import { T } from '../util'

interface Props {
  color?: string
  tag?: string
  pill?: boolean
  size?: number
  className?: string
}

const Badge: React.SFC<Props> = ({ tag, children, ...rest }) =>
  React.createElement(
    tag,
    {
      ...rest
    },
    children
  )

const StyledBadge = styled(Badge)`
  display: inline-block;
  min-width: 20px;
  height: 20px;
  font-size: ${({ size }) => size}px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  color: ${T('palette.white')};
  background-color: ${({ theme, color }) => theme.palette[color] || color};
  border-radius: 10px;
  ${props =>
    props.pill
      ? css`
          padding-right: 6px;
          padding-left: 6px;
        `
      : null};
`

StyledBadge.defaultProps = {
  tag: 'span',
  pill: false,
  color: 'primary',
  size: 14
}

export default StyledBadge
