import * as React from 'react'
import styled, { css } from '../theme/styled-components'
import { T } from '../util'

interface Props {
  color?: string
  pill?: boolean
  size?: number
  className?: string
}

class Badge extends React.Component<Props> {
  render() {
    const { className, children } = this.props

    return <span className={className}>{children}</span>
  }
}

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
  pill: false,
  color: 'primary',
  size: 14
}

export default StyledBadge
