import * as React from 'react'
import styled from '../theme/styled-components'

export interface Props {
  basis?: string
  direction?: string
  grow?: number
  halign?: string
  shrink?: number
  type?: string
  valign?: string
  className?: string
}

const Flex: React.SFC<Props> = ({ children, type, ...rest }) =>
  React.createElement(
    type,
    {
      ...rest
    },
    children
  )

const StyledFlex = styled(Flex)`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  justify-content: ${props => (props.direction === 'row' ? props.halign : props.valign)};
  align-items: ${props => (props.direction === 'row' ? props.valign : props.halign)};
`

StyledFlex.defaultProps = {
  direction: 'row',
  halign: 'flex-start',
  valign: 'flex-start',
  grow: 0,
  basis: 'auto',
  shrink: 1,
  type: 'div'
}

export default StyledFlex
