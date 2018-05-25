import * as React from 'react'
import styled, { css } from '../theme/styled-components'
import { T } from '../util'

interface Props {
  color?: string
  tag?: string
  pill?: boolean
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
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  color: ${T('palette.white')};
  background-color: ${({ theme, color }) => theme.palette[color] || color};
  ${props =>
    props.pill
      ? css`
          padding-right: 0.6em;
          padding-left: 0.6em;
          border-radius: 10rem;
        `
      : css`
          border-radius: 0.25rem;
        `};
`

StyledBadge.defaultProps = {
  tag: 'span',
  pill: false,
  color: 'primary'
}

export default StyledBadge
