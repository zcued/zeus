import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'

interface HeadingProps {
  className?: string
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

const H: React.SFC<HeadingProps> = ({ size, children, ...rest }) =>
  React.createElement(`h${size}`, { ...rest }, children)

const Heading = styled(H)`
  margin: ${T('spacing.sm') + 'px'};
  color: ${T('palette.black')};
  font-weight: 400;
  line-height: 1.4;
`

export default Heading
