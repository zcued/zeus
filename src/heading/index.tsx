import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'

interface Props {
  className?: string
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

const H: React.SFC<Props> = ({ size = 3, children, ...rest }) => React.createElement(`h${size}`, { ...rest }, children)

const Heading = styled(H)`
  margin: ${T('spacing.sm')}px;
  color: ${T('palette.black')};
  font-weight: ${T('font.weight.normal')};
  line-height: 1.4;
`

export default Heading
